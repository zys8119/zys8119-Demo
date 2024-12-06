<template>
    <div class='index abs-content flex-center'>
    </div>
</template>
<script setup lang="ts">
import userJson from "./user.json"
const data = {
    "data": [
        {
            "account_cert_info": "{}",
            "avatar_signature": "",
            "avatar_small": {
                "uri": "168x168/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA",
                "url_list": [
                    "https://p11.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA~c5_168x168.webp?biz_tag=aweme_im&from=3782654143&s=im_1&sc=avatar",
                    "https://p3.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA~c5_168x168.webp?biz_tag=aweme_im&from=3782654143&s=im_1&sc=avatar",
                    "https://p26.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA~c5_168x168.webp?biz_tag=aweme_im&from=3782654143&s=im_1&sc=avatar",
                    "https://p11.douyinpic.com/img/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA~c5_168x168.jpeg?biz_tag=aweme_im&from=3782654143&s=im_1&sc=avatar"
                ]
            },
            "avatar_thumb": {
                "uri": "100x100/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA",
                "url_list": [
                    "https://p11.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA.jpeg?biz_tag=aweme_im&from=3782654143&s=im_1&sc=avatar",
                    "https://p26.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA.jpeg?biz_tag=aweme_im&from=3782654143&s=im_1&sc=avatar",
                    "https://p3.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_oQDeAEpApImPiFAAhCJfAlwmuqA9C9g78nEJAA.jpeg?biz_tag=aweme_im&from=3782654143&s=im_1&sc=avatar"
                ]
            },
            "commerce_user_level": 0,
            "custom_verify": "",
            "enterprise_verify_reason": "",
            "follow_status": 1,
            "follower_status": 0,
            "has_e_account_role": false,
            "im_activeness": 2,
            "im_role_ids": [],
            "is_block": false,
            "nickname": "时光追影🐎",
            "sec_uid": "MS4wLjABAAAA7CHJgRP0K3Y-FMQuUSML_R9en81gnbsacNDc45en39m5c32DmkswH9YEGn5D1So-",
            "short_id": "4193797321",
            "signature": "感谢支持😄\n感谢抖音平台❤️\n每日更新治愈你的一切不开森😄\n不忘初心砥砺前行",
            "social_relation_sub_type": 0,
            "social_relation_type": 0,
            "uid": "4099423914700654",
            "unique_id": "dy1mn2srhg2um",
            "verification_type": 0,
            "webcast_sp_info": {},
            "with_commerce_entry": false
        }
    ],
    "extra": {
        "fatal_item_ids": [],
        "logid": "2024120615523443FBFB880F8CD003C5A7",
        "now": 1733471554000
    },
    "log_pb": {
        "impr_id": "2024120615523443FBFB880F8CD003C5A7"
    },
    "next_req_count": 0,
    "owner_sec_uid": "MS4wLjABAAAAnl0aRqm1IQ2DTj9Dmd5hcnJ01gMItdrZWDhXlJbYOeA",
    "status_code": 0
}
const json = ref<Array<typeof data>>(userJson)
console.log(json.value)
console.log(json.value.reduce((p, c: any) => {
    p[c.owner_sec_uid] = p[c.owner_sec_uid] || []
    p[c.owner_sec_uid].push(c)
    return p
}, {}))
// onMounted(async () => {
//     const data = (await $apis.tiktok.login()).data
//     console.log(data)
// })
</script>
<style scoped lang="less">
.index {}
</style>