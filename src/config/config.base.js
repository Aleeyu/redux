export default {
  sms: {
    regEnt: '/sms/reg_ent',         // 注册新的企业发送短信验证码
    chgPwd: '/sms/chg_pwd',         // 修改密码发送短信验证码
    chgMobile: '/sms/chg_mobile',   // 修改绑定手机号发送短信验证码
    sendPws: '/sms/send_pwd',        // 新建用户生成随机密码
    event: '/market/customer/flow/mobile/sms' // 参与活动采集手机号
  },
  tencentMapKey: 'O4JBZ-JBSK5-DT6IG-Q6TOM-6KZ62-NGBUP',
  wechat: {
    appId: 'wx03819c3e2bfb5d37'   // 走取购公众号
  }
};
