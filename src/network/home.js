import {request} from "./request";

export function postInfo(name, idNumber, nation, politics_status, education_background, eDate,
                         tg, phone, wb, qq, email, devId, post, rDate, txz, dw){
  return request({
    method: 'post',
    url: '/addInfo',
    params: {
      name,
      idNumber,
      nation,
      politics_status,
      education_background,
      eDate, // 入团年月
      tg,
      phone,
      wb, // 微博
      qq,
      email,
      devId, // 发展团员编号
      post, // 团内现任职务
      rDate, // 任职年月
      txz,
      dw
    }
  })
}

