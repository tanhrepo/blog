// 正则匹配中国大陆手机号码
function isChinaPhoneNumber(phoneNumber: string) : boolean {
    var pattern = /^1[34578]\d{9}$/;
    return pattern.test(phoneNumber);
}

isChinaPhoneNumber('12345678901');
