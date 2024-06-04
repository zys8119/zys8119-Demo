<template>
    <div class="Home">
        <div class="user">
            <img src="@/src/assets/picture.jpeg">
            <div>
                <h1>张云山</h1>
                <div class="flex justify-center items-center gap-5px">
                    <span class="w-30px h-30px color-#fff cursor-pointer hover:color-#000" @click="go('https://github.com/zys8119/')">
                        <svg t="1686532511422" class="icon w-30px h-30px fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5836" width="200" height="200"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="5837"></path></svg>
                    </span>
                    <span class="w-35px h-35px color-#fff cursor-pointer hover:color-#000" @click="go('https://github.com/zys8119/zys8119-Demo')">
                        <svg t="1686533392674" class="icon w-35px h-35px fill-current" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5490" width="200" height="200"><path d="M441.344 642.048h-256V279.552h497.152v87.552s70.656-4.096 106.496 8.704V281.6s-2.048-113.152-108.544-113.152H192c0 2.048-106.496 10.752-106.496 119.296v347.648s-6.656 115.2 104.448 115.2 170.496 2.048 170.496 2.048 10.752 34.304-66.048 51.2c-80.896 14.848-153.6 14.848-164.352 70.656h431.104S435.2 782.848 441.344 642.048z"  p-id="5491"></path><path d="M725.504 418.304c-125.952 0-228.352 102.4-228.352 228.352s102.4 228.352 228.352 228.352 228.352-102.4 228.352-228.352-102.912-228.352-228.352-228.352z m-36.352 55.296c10.752-2.048 23.552-4.096 34.304-4.096 12.8 0 25.6 2.048 38.4 4.096l-2.048 2.048c12.8 36.352 21.504 70.656 25.6 104.448-45.056 6.144-85.504 4.096-117.248 0 4.096-34.304 12.8-68.096 25.6-104.448l-4.608-2.048z m-138.752 206.848c-2.048-10.752-4.096-21.504-4.096-34.304 0-19.456 4.096-38.4 10.752-57.344 19.456 10.752 40.448 16.896 59.904 23.552-2.048 27.648-2.048 55.296 2.048 87.552-43.008-8.704-68.608-19.456-68.608-19.456z m21.504 51.2c19.456 6.144 38.4 12.8 55.296 16.896 4.096 16.896 8.704 34.304 14.848 53.248-29.696-14.848-55.296-39.936-70.144-70.144z m51.2-162.304c-25.6-6.144-42.496-14.848-47.104-16.896 16.896-27.648 40.448-49.152 68.096-64-8.192 21.504-16.896 49.152-20.992 80.896z m136.192 249.856c-10.752 2.048-23.552 4.096-34.304 4.096-10.752 0-21.504-2.048-31.744-2.048 0-2.048-10.752-25.6-19.456-64 38.4 4.096 72.704 4.096 104.448 0-8.192 34.304-16.896 55.296-18.944 61.952z m25.6-111.104c-45.056 6.656-85.504 4.096-119.296 0-2.048-25.6-4.096-53.248-2.048-82.944 47.104 8.704 89.6 6.144 125.952 0 0 29.696 0 57.344-4.608 82.944z m89.6-153.6c-14.848 6.656-29.696 10.752-45.056 14.848-6.656-31.744-12.8-57.344-19.456-76.8 26.112 15.36 49.664 36.352 64.512 61.952z m-64 245.248c6.144-16.896 10.752-34.304 14.848-51.2 21.504-4.096 38.4-10.752 53.248-16.896-14.336 30.208-37.888 53.248-68.096 68.096z m87.552-119.296c-21.504 8.704-42.496 14.848-64 19.456 4.096-31.744 4.096-59.904 2.048-87.552 31.744-10.752 53.248-21.504 57.344-23.552 6.144 16.896 10.752 36.352 10.752 57.344-2.048 12.8-4.096 23.552-6.144 34.304z" p-id="5492"></path></svg>
                    </span>
                    <span class="w-25px h-25px color-#fff cursor-pointer hover:color-#000" @click="go('https://github.com/zys8119/Blog')">
                        <svg t="1686533678233" class="icon w-25px h-25px fill-current" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7265" width="200" height="200"><path d="M653.302558 611.117182 370.983634 611.117182c-26.144626 0-47.286268 21.249233-47.286268 47.286268s21.195437 47.340063 47.286268 47.340063l282.318923 0c26.037035 0 47.232472-21.303029 47.232472-47.340063C700.481235 632.366415 679.339593 611.117182 653.302558 611.117182zM439.734317 415.409056l144.602375 0c26.037035 0 47.286268-21.249233 47.286268-47.178677 0-26.09083-21.249233-47.393859-47.286268-47.393859L439.734317 320.83652c-26.09083 0-47.232472 21.303029-47.232472 47.393859C392.448049 394.159823 413.589691 415.409056 439.734317 415.409056zM819.799713 0.107591C619.088603 0 418.323698 0.107591 217.558793 0 198.568972 0 180.009515 1.452479 161.288672 5.594735c-95.271878 20.92646-158.750599 101.888727-159.987896 197.429582C-1.120023 400.830468 0.547638 598.475233 0.601434 796.173793c0 22.378939 0.968319 44.219923 6.186486 66.545066 21.948575 93.012465 98.768587 158.158848 197.859947 160.256874 102.372887 1.990434 204.907161 0.430364 307.226252 0.430364 98.822382 0 197.752356-0.107591 296.574738 0.107591 19.043616 0.053796 37.441686-1.56007 56.216325-5.863712 94.626331-21.840984 159.288554-101.996318 159.34235-199.366221 0.053796-204.853365 0.107591-409.70673 0-614.560095C1023.953736 90.43028 933.415865 0.161387 819.799713 0.107591zM910.660357 497.178257l0 135.779909 0 30.125495c0 137.501366-111.35674 248.858106-248.911901 248.858106L519.835856 911.941766 391.210752 911.941766 362.268759 911.941766c-137.555161 0-248.911901-111.35674-248.911901-248.858106L113.356858 361.021779c0-137.44757 111.35674-248.858106 248.911901-248.858106l68.535501 0 88.977801 0 4.787802 0c0 0.107591 0 0.107591 0 0.107591 135.295749 2.52839 244.177895 112.863015 244.177895 248.750515l0 3.819482 0 20.4423c0 15.062747 12.26538 27.274332 27.166741 27.274332l28.404038 0 13.717859 0c40.077667 0 72.570165 32.492498 72.570165 72.623961L910.660357 497.178257 910.660357 497.178257z" p-id="7266"></path></svg>
                    </span>
                </div>
            </div>
        </div>
        <div class="search">
            <h4><span>BLOG</span>个人爱好，只是积累，点滴成石</h4>
            <input placeholder="个人爱好，只是积累，点滴成石" v-model="value">
        </div>
        <div class="blog-slider swiper" ref="el">
            <div class="blog-slider__wrp swiper-wrapper">
                <div class="blog-slider__item swiper-slide" v-for="(item, key) in navs" :key="key">
                    <div class="blog-slider__img">
                        <img :src="item.img || 'https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp'"
                             alt="">
                    </div>
                    <div class="blog-slider__content">
                        <span class="blog-slider__code" v-if="item.time">{{ item.time }}</span>
                        <div class="blog-slider__title" v-if="item.title">{{ item.title }}</div>
                        <div class="blog-slider__text" v-if="item.content">
                            <div class="blog-slider__text_content">
                                {{ item.content }}
                            </div>
                        </div>
                        <div class="blog-slider__button" v-if="!item.hideButton && item.url" @click="readMore(item)">
                            阅读更多
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-slider__pagination" ref="page"></div>
        </div>
    </div>
</template>

<script setup lang="ts" path="/" redirect="/feipanLayout">
import {Swiper, Navigation, Pagination, Mousewheel, EffectFade} from "swiper"
import {marked} from "marked"
import route from "@/route"

const value = ref("")
type NavTypeConfig = Partial<{
    img: string
    time: string
    title: string
    content: string
    hideButton: boolean
    url: string
}>
type NavType = Array<NavTypeConfig>
const currDome = ref<NavType>(route.options.routes.filter(e => e.meta?.title).map(e => ({
    title: e.meta.title,
    content: e.meta.content || e.meta.title,
    url: e.path
})) as NavType)
const gitHubNavs = ref<NavType>([])
const reg = computed(() => new RegExp(value.value, 'img'))
const navs = computed<NavType>(() => {
    return [
        {
            title: "🍺 敬这一刻的自己 🍻",
            content: "【马云】：我一直觉得填补空白这句话是有问题的，不是因为欧美的就是先进的，就是我们要去填补的。其实今天我们不应该要和哪个东西接轨，适应哪国的标准，填补哪个空白，今天我们要思考的是怎么和未来接轨，怎么适应未来的标准，怎么弥补未来的空白，我们要想明白未来是如何的，以及自己到底要做成一个什么样的体系，然后再去看看别人怎么做，如果永远重复别人的语言，讨论别人设定的主题，我们不但会迷失现在，而且会错失未来。"
        } as NavTypeConfig
    ]
    .concat(currDome.value)
    .concat(gitHubNavs.value)
    .filter(e => reg.value.test(e.title) || reg.value.test(e.content))
    .slice(0, 10)
})
const router = useRouter()
const readMore = (item) => {
    if (!item.url) {
        return console.error("文章不存在！")
    }
    if (/^\//.test(item.url)) {
        router.push(item.url.toLocaleLowerCase())
    } else {
        window.open(/^(http(s*):)*\/\//.test(item.url) ? item.url : `https://github.com/zys8119/Blog/blob/master/${item.url.replace(/^\.*\/*/, "")}`)
    }
}
onMounted(async () => {
    let md = ''
    try {
        md = await fetch('https://raw.githubusercontent.com/zys8119/Blog/master/README.md').then(e => e.text())
    } catch (e) {
        md = ''
    }
    gitHubNavs.value = marked.lexer(md).map((e: any) => e.tokens?.find(ee => ee.type == 'link')).filter(e => e).map((e: {
        type: string
        raw: string
        href: string
        title: string
        text: string
        tokens: any[]
    }) => {
        return {
            title: e.text,
            content: e.text,
            url: e.href,
        }
    })
    watch(navs, () => {
        new Swiper(".blog-slider", {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            modules: [Navigation, Pagination, Mousewheel, EffectFade],
            mousewheel: {
                invert: false,
            },
            autoHeight: true,
            pagination: {
                el: ".blog-slider__pagination",
                clickable: true,
            }
        });
    }, {immediate: true})

})
const go = (url:string)=> {
    if(/^(http|\/\/)/.test(url)){
        window.open(url)
    }else
    if(/^\//.test(url)){
        router.push(url)
    }
}

</script>

<style lang="scss">
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

    .user {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;

        img {
            width: 70px;
            height: 70px;
            border-radius: 100%;
            overflow: hidden;
            box-shadow: 5px 5px 10px #000000;
        }

        h1 {
            color: #ffffff;
            text-shadow: 5px 5px 10px #000000;
        }
    }

    .search {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        margin-bottom: 40px;

        h4 {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #fb333b;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            padding-right: 15px;

            span {
                background-color: #fb333b;
                padding: 0 10px;
                color: #ffffff;
            }
        }

        input {
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
            width: 100%;
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

        .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
            bottom: 10px;
            left: 0;
            width: 100%;

        }

        &__pagination {
            position: absolute;
            z-index: 21;
            right: 20px;
            width: 11px !important;
            text-align: center;
            left: auto !important;
            top: 50%;
            bottom: auto !important;
            transform: translateY(-50%);
            @media screen and (max-width: 768px) {
                transform: translateX(-50%);
                left: 50% !important;
                top: 205px;
                width: 100% !important;
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
        .search {
            margin-bottom: 0;

            input {
                width: 100%;
            }
        }
        .blog-slider {
            min-height: initial;
            margin: 0;
            height: calc(100% - 250px);
        }
        .blog-slider__text {
            margin-bottom: 15px;
            height: 50px;
            position: relative;
            width: 100%;

            .blog-slider__text_content {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow-x: hidden;
                z-index: 1;

                &::-webkit-scrollbar {
                    width: 0;
                }
            }

            &:before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(#0000, #ffffff 90%);
                z-index: 2;
                pointer-events: none;
            }
        }
        .blog-slider__button {
            position: relative;
            z-index: 1;
        }
    }

}
</style>
