import {accessToken, version} from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=photo_400_orig&${this.commonInfo}`
    }

    getGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`
    }
    getConversationMembers(groupId)
    {
        return `${this.url}/messages.getConversationMembers?peer_id=${groupId}&fields=photo_400_orig&${this.commonInfo}`
    }
    getConversations(groupId)
    {
        return `https://api.vk.com/method/messages.getConversations?group_id=224801546&access_token=vk1.a.elHtBnbznk8n5wnPFPvCdsX1tW7wdDlv31ed-UhHkcO-zbCoqDdlkXK6P49KnTvDD_0Z02u6raS_xma9KZke0XoTv5KjHz5w_s_lpDvxGOiMR20fwOZsumRFle3U_dnix0uVLhf4Vm624if4b4rvCZOm7f7Hfy0hX50L9Mea7BvR5TFdnhdvez432Kga6KYgRhHGOkre13vANft4R7TYCw&v=5.199`
    }
    putZapis(id)
    {

    }
}

export const urls = new Urls()
