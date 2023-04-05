<template>
    <div class="Home">
        <div class="user">
            <img src="https://avatars.githubusercontent.com/u/19203342?v=4">
            <h1>张云山</h1>
        </div>
        <div class="search">
            <h4><span>BLOG</span>个人爱好，只是积累，点滴成石</h4>
            <input placeholder="个人爱好，只是积累，点滴成石" v-model="value">
        </div>
        <div class="blog-slider swiper" ref="el">
            <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide" v-for="(item, key) in navs" :key="key">
                    <div class="blog-slider__img">
                        <img :src="item.img || 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp'" alt="">
                    </div>
                    <div class="blog-slider__content">
                        <span class="blog-slider__code" v-if="item.time">{{ item.time }}</span>
                        <div class="blog-slider__title" v-if="item.title">{{ item.title }}</div>
                        <div class="blog-slider__text" v-if="item.content">{{item.content}}</div>
                        <div class="blog-slider__button" v-if="!item.hideButton && item.url" @click="readMore(item)">阅读更多</div>
                    </div>
                </div>
            </div>
            <div class="blog-slider__pagination" ref="page"></div>
        </div>
    </div>
</template>

<script setup lang="ts" path="/">
import {Swiper, Navigation, Pagination, Mousewheel, EffectFade} from "swiper"
import {marked} from "marked"
import route from "@/route"
const value = ref("")
type NavType = Array<Partial<{
    img:string
    time:string
    title:string
    content:string
    hideButton:boolean
    url:string
}>>
const currDome = ref<NavType>(route.options.routes.filter(e=>e.meta?.title).map(e=>({
    title:e.meta.title,
    content:e.meta.content || e.meta.title,
    url:e.path
})) as NavType)
const gitHubNavs = ref<NavType>([])
const reg = computed(()=> new RegExp(value.value, 'img'))
const navs = computed<NavType>(()=>{
    return currDome.value.concat(gitHubNavs.value).filter(e=>reg.value.test(e.title) || reg.value.test(e.content)).slice(0,10)
})
const router = useRouter()
const readMore = (item)=>{
    if(!item.url){
        return console.error("文章不存在！")
    }
    if(/^\//.test(item.url)){
        router.push(item.url.toLocaleLowerCase())
    }else{
        window.open(/^(http(s*):)*\/\//.test(item.url) ? item.url : `https://github.com/zys8119/Blog/blob/master/${item.url.replace(/^\.*\/*/, "")}`)
    }
}
onMounted(async ()=>{
    let md = ''
    try {
        md = await fetch('https://raw.githubusercontent.com/zys8119/Blog/master/README.md').then(e=>e.text())
    }catch (e) {
        md = ''
    }
    gitHubNavs.value = marked.lexer(md).map((e:any)=>e.tokens?.find(ee=>ee.type == 'link')).filter(e=>e).map((e:{
        type:string
        raw:string
        href:string
        title:string
        text:string
        tokens:any[]
    })=>{
        return {
            title:e.text,
            content:e.text,
            url:e.href,
        }
    })
    watch(navs, ()=>{
        new Swiper(".blog-slider", {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            modules:[Navigation, Pagination, Mousewheel, EffectFade],
            mousewheel: {
                invert: false,
            },
            autoHeight: true,
            pagination: {
                el: ".blog-slider__pagination",
                clickable: true,
            },
        });
    }, {immediate:true})

})

</script>

<style  lang="scss">
.Home {
    background-color: #FFE53B;
    background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%);
    min-height: 100vh;
    font-family: 'Fira Sans', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    gap: 15px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    * {
        box-sizing: border-box;
    }
    .user{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        img{
            width: 70px;
            height: 70px;
            border-radius: 100%;
            overflow: hidden;
            box-shadow: 5px 5px 10px #000000;
        }
        h1{
            color: #ffffff;
            text-shadow: 5px 5px 10px #000000;
        }
    }
    .search{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 40px;
        h4{
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #fb333b;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding-right: 15px;
            span{
                background-color: #fb333b;
                padding: 0 10px;
                color: #ffffff;
            }
        }
        input{
            border: 1px solid #ffffff;
            line-height: 50px;
            padding: 0 10px;
            border-radius: 25px;
            width: 500px;
            color: #f92c3e;
        }
    }

    .blog-slider {
        width: 95%;
        position: relative;
        max-width: 800px;
        background: #fff;
        box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
        padding: 25px;
        border-radius: 25px;
        height: 400px;
        transition: all .3s;


        @media screen and (max-width: 992px) {
            max-width: 680px;
            height: 400px;
        }

        @media screen and (max-width: 768px) {
            min-height: 500px;
            height: auto;
            margin: 180px auto;
        }


        @media screen and (max-height: 500px) and (min-width: 992px) {
            height: 350px;
        }

        &__item {
            display: flex;
            align-items: center;

            @media screen and (max-width: 768px) {
                flex-direction: column;
            }

            &.swiper-slide-active {
                .blog-slider__img {
                    img {
                        opacity: 1;
                        transition-delay: .3s;
                    }
                }
                .blog-slider__content {
                    > * {

                        opacity: 1;
                        transform: none;

                    @for $i from 0 to 15 {
                        &:nth-child(#{$i + 1}) {
                            transition-delay: $i * 0.1 + 0.3s;
                        }
                    }

                    }
                }
            }

        }

        &__img {
            // width: 40%;
            width: 300px;
            flex-shrink: 0;
            height: 300px;
            background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
            box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
            border-radius: 20px;
            transform: translateX(-80px);

            overflow: hidden;

            &:after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
                border-radius: 20px;
                opacity: 0.8;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                opacity: 0;
                border-radius: 20px;
                transition: all .3s;
            }


            @media screen and (max-width: 992px) {
                // width: 45%;
            }
            @media screen and (max-width: 768px) {
                transform: translateY(-50%);
                width: 90%;
            }
            @media screen and (max-width: 576px) {
                width: 95%;
            }
            @media screen and (max-height: 500px) and (min-width: 992px) {
                height: 270px;
            }
        }

        &__content {
            // width: 60%;
            padding-right: 25px;
            @media screen and (max-width: 992px) {
                // width: 55%;
            }
            @media screen and (max-width: 768px) {
                margin-top: -80px;
                text-align: center;
                padding: 0 30px;
            }

            @media screen and (max-width: 576px) {
                padding: 0
            }
            > * {
                opacity: 0;
                transform: translateY(25px);
                transition: all .4s;


            }

        }

        &__code {
            color: #7b7992;
            margin-bottom: 15px;
            display: block;
            font-weight: 500;
        }

        &__title {
            font-size: 24px;
            font-weight: 700;
            color: #0d0925;
            margin-bottom: 20px;
        }

        &__text {
            color: #4e4a67;
            margin-bottom: 30px;
            line-height: 1.5em;
        }

        &__button {
            display: inline-flex;
            background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
            padding: 15px 35px;
            border-radius: 50px;
            color: #fff;
            box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
            text-decoration: none;
            font-weight: 500;
            justify-content: center;
            text-align: center;
            letter-spacing: 1px;
            user-select: none;
            @media screen and (max-width: 576px) {
                width: 100%;
            }

        }
        .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
            bottom: 10px;
            left: 0;
            width: 100%;

        }
        &__pagination {
            position: absolute;
            z-index: 21;
            right: 20px;
            width: 11px!important;
            text-align: center;
            left: auto!important;
            top: 50%;
            bottom: auto!important;
            transform: translateY(-50%);
            @media screen and (max-width: 768px) {
                transform: translateX(-50%);
                left: 50%!important;
                top: 205px;
                width: 100%!important;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &.swiper-pagination-bullets .swiper-pagination-bullet {
                margin: 8px 0;
                @media screen and (max-width: 768px) {
                    margin: 0 5px;
                }
            }

            .swiper-pagination-bullet {
                width: 11px;
                height: 11px;
                display: block;
                border-radius: 10px;
                background: #062744;
                opacity: 0.2;
                transition: all .3s;
                &-active {
                    opacity: 1;
                    background: #fd3838;
                    height: 30px;
                    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
                    @media screen and (max-width: 768px) {
                        height: 11px;
                        width: 30px;
                    }
                }
            }

        }

    }
    @media screen and (max-width: 576px) {
        .search{
            margin-bottom: 0;
            input{
                width: 100%;
            }
        }
        .blog-slider{
            min-height: initial;
            margin: 0;
            height: calc(100% - 250px);
        }
        .blog-slider__text{
            margin-bottom: 15px;
            overflow: hidden;
            height: 50px;
            position: relative;
            width: 100%;
            &:before{
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(#0000, #ffffff 90%);
            }
        }
        .blog-slider__button{
            position: relative;
            z-index: 1;
        }
    }
}
</style>
