import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./homeContentSection.css";
import { AdsHorizontal, AdsVerticalHomeContent } from "../adsMethods";

import image01 from "../../storages/images/content/needforspeedmostwanted.jpg";
import image02 from "../../storages/images/content/maxpayne3.jpg";
import image03 from "../../storages/images/content/halo3.jpg";
import image04 from "../../storages/images/content/fruitninja.jpg";

//import page20210602x01 from "../../storages/content/dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau";

function ContentItem(props) {
  return (
    <div className="item">
      <a href={props.link}>
        <img src={props.src} alt={props.alt} class="img_inner"></img>
      </a>
      <div className="itemContent">
        <a href={props.link}>
          <h3>{props.title}</h3>
        </a>
        <div className="timestamp">
          <h5>{props.types}</h5>
          <div className="time">{props.time}</div>
        </div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default function HomeContentSection() {
  return (
    <div className="homeContent">
      <div className="containerContainer">
        <AdsHorizontal />
        <div className="content">
          <ContentItem
            title="Ngọc Trinh trình làng BST nội y bị tố đạo nhái Victoria's Secret: Thiết kế và 'giá rổ' thế nào?"
            content="Với khoảng 500k là bạn đã sắm được trọn bộ đồ lót của Venus' Secret."
            src="https://afamilycdn.com/150157425591193600/2021/6/2/1879373681503831137856513896795404376676089n-162263222469382786144.jpg"
            alt="Ngọc Trinh"
            types="images"
            time="03/06/2021 10:10 AM"
            link="/ngoc-trinh-trinh-lang-bst-noi-y-bi-to-dao-nhai-victorias-secret-thiet-ke-va-gia-ro-the-nao"
          />
          <ContentItem
            title="Linh Chichan diện trang phục thả rông tới 90% vòng một, nữ streamer Việt nhận về nhiều ý kiến trái chiều"
            content="Thời trang khi ra đường của cô nàng streamer cũng khiến khá nhiều người phải chảy máu mũi."
            src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/1/photo-1-16225193754541692620860.jpg"
            alt="Linh Chichan"
            types="News"
            time="03/06/2021 09:50 AM"
            link="/linh-chichan-dien-trang-phuc-tha-rong-toi-90-vong-mot-nu-streamer-viet-nhan-ve-nhieu-y-kien-trai-chieu"
          />
          <ContentItem
            title="Gấu Kami, nữ streamer gần 7 triệu lượt follow TikTok bị giả mạo tài khoản hàng loạt, thậm chí bị lợi dụng hình ảnh để lừa đảo"
            content="Gấm Kami - nữ streamer/TikToker cực hot hiện nay đang bị nhiều kẻ gian giả mạo tài khoản TikTok và mục đích không chỉ là câu view"
            src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622620397947621513281.jpg"
            alt="Gấu Kami"
            types="News"
            time="03/06/2021 03:05 AM "
            link="/gau-kami-nu-streamer-gan-7-trieu-luot-follow-tiktok-bi-gia-mao-tai-khoan-hang-loat-tham-chi-bi-loi-dung-hinh-anh-de-lua-dao"
          />
          <ContentItem
            title="Ngọc Trinh vô tư đăng clip chỉnh sửa nội y, để lộ cả đồ bảo hộ bên trong nhìn mà “thót tim”"
            content="Ngọc Trinh tiếp tục gây tranh cãi vì hành động vô tư của mình."
            src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/6/2/base64-16226096789721565082138.png"
            alt="Ngọc Trinh"
            types="images"
            time="02/06/2021 01:19 PM"
            link="/ngoc-trinh-vo-tu-dang-clip-chinh-sua-noi-y-de-lo-ca-do-bao-ho-ben-trong-nhin-ma-thot-tim"
          />
          <AdsVerticalHomeContent />
          <ContentItem
            title="One Piece: Dù đã chết nhưng sức mạnh của 6 nhân vật huyền thoại này cho đến nay vẫn chưa ai vượt qua nổi"
            content="Thế hệ hải tặc mới vẫn chưa ai có thể vượt qua được những tượng đài sức mạnh trong One Piece này."
            src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/2/photo-1-16226084298312007960851.jpg"
            alt="One Piece"
            types="news"
            time="02/06/2021 12:23 PM"
            link="/one-piece-du-da-chet-nhung-suc-manh-cua-6-nhan-vat-huyen-thoai-nay-cho-den-nay-van-chua-ai-vuot-qua-noi"
          />
          <ContentItem
            title="Đấu Trường Chân Lý: Học hỏi những mẹo độc khi chơi Sett 'One Punch Man' từ kỳ thủ top 8 Thách Đấu"
            content="Những mẹo dưới đây sẽ giúp game thủ Đấu Trường Chân Lý leo
          rank hiệu quả hơn với việc chơi xoay quanh Sett."
            src="https://gamek.mediacdn.vn/133514250583805952/2021/6/2/sett-1622624730224552537391.jpg"
            alt="Đấu Trường Chân Lý"
            types="Games"
            time="02/06/2021 11:59 PM"
            link="/dau-truong-chan-ly-hoc-hoi-nhung-meo-doc-khi-choi-sett-one-punch-man-tu-ky-thu-top-8-thach-dau"
          />
          <ContentItem
            title="Sam bị tuột bikini trên sóng, nữ YouTuber vội vàng che đậy nhưng vẫn hớ hênh, lên tiếng trần tình tại 'vòng một quá to'"
            content="Tai nạn của cô nàng YouTuber đang khiến khá nhiều người cảm thấy bất ngờ."
            src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/2/photo-1-1622604324537468863202.jpg"
            alt="Streamer"
            types="news"
            time="02/06/2021 10:31"
            link="/sam-bi-tuot-bikini-tren-song-nu-youtuber-voi-vang-che-day-nhung-van-ho-henh-len-tieng-tran-tinh-tai-vong-mot-qua-to"
          />
          <ContentItem
            title="Hợp tác hãng xe McLaren, PUBG Mobile tung event hấp dẫn, siêu tốc bậc nhất làng game tháng 6"
            content="Có thể nói cơ hội trải nghiệm siêu xe McLaren ngoài đời chưa bao giờ dễ đến thế đối với cộng đồng game thủ PUBG Mobile trong mùa hè này."
            src="https://channel.mediacdn.vn/thumb_w/640/2021/6/2/photo-1-1622618650933658080991.jpg"
            alt="PUBG Mobile"
            types="games"
            time="02/06/2021 03:30 PM"
            link="/hop-tac-hang-xe-mclaren-pubg-mobile-tung-event-hap-dan-sieu-toc-bac-nhat-lang-game-thang-6"
          />
          <AdsVerticalHomeContent />
          <ContentItem
            title="Vũ Thị Anh Thư lộ ảnh thời chưa phẫu thuật thẩm mỹ?"
            content="So sánh ảnh trước đây, nhiều người cho rằng Vũ Thị Anh Thư đã đụng chạm 'dao kéo' nhiều bộ phận trên cơ thể để có nhan sắc như hiện tại."
            src="https://sohanews.sohacdn.com/160588918557773824/2021/6/1/v2-16225299233441943712939.jpg"
            alt="Vũ Thị Anh Thư"
            types="images"
            time="01/06/2021 19:00"
            link="/vu-thi-anh-thu-lo-anh-thoi-chua-phau-thuat-tham-my"
          />
        </div>
      </div>
    </div>
  );
}
