import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '19/08/2021 12:59 PM',
"title": 'So sánh nét vẽ giữa manga và anime "Có bạn gái, lại thêm bạn gái", bản gốc đã đỉnh lên hoạt hình lại càng tuyệt hơn',
"description": 'Anh em có thích motip bắt cá hai tay của bộ anime mới trong mùa hè này "Có bạn gái, lại thêm bạn gái" không?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291028574942118200277.jpg',
"alt": 'ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,',
"category": 'games',
"date": '19/08/2021',
"time": '12:59 PM',
"link": '/so-sanh-net-ve-giua-manga-va-anime-co-ban-gai-lai-them-ban-gai-ban-goc-da-dinh-len-hoat-hinh-lai-cang-tuyet-hon',
"zcomponent": 'page_20210819125901',
"filepath": './20210819125901-so-sanh-net-ve-giua-manga-va-anime-co-ban-gai-lai-them-ban-gai-ban-goc-da-dinh-len-hoat-hinh-lai-cang-tuyet-hon.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "games";
const categoryLink = "/games";
const title =
  'So sánh nét vẽ giữa manga và anime "Có bạn gái, lại thêm bạn gái", bản gốc đã đỉnh lên hoạt hình lại càng tuyệt hơn';
const author = "Mẹ Sề";
const source = "Pháp luật và bạn đọc";
const timestamp = "19/08/2021 12:59 PM";
const description =
  'Anh em có thích motip bắt cá hai tay của bộ anime mới trong mùa hè này "Có bạn gái, lại thêm bạn gái" không?';
const link =
  "so-sanh-net-ve-giua-manga-va-anime-co-ban-gai-lai-them-ban-gai-ban-goc-da-dinh-len-hoat-hinh-lai-cang-tuyet-hon";
const tagparam = [
  "ANIME",
  "SO SÁNH ANIME VÀ MANGA",
  "CÓ BẠN GÁI",
  "LẠI THÊM BẠN GÁI",
  "KANOJO MO KANOJO",
  "ANIME MÙA HÈ",
];
const facebookLinkShare =
  "https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fhuyetnguyet.com%2F" +
  link +
  "&layout=button_count&size=small&width=77&height=20&appId";

const updatedTags = tagparam.map((tag) => {
  const link =
    "https://www.google.com/search?q=huyetnguyet+" + tag.replace(" ", "+");
  return (
    <a href={link} className="tag">
      {tag}
    </a>
  );
});

export default function page_20210819125901() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Content>
        <div className="page">
          <AdsVertical />
          <div className="path">
            <a href="/" className="pathName">
              home
            </a>
            <div className="pathName" style={{ color: "red" }}>
              {">"}
            </div>
            <a href={categoryLink} className="pathName">
              {category}
            </a>
          </div>
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="info">
            <p>
              <div className="author">{author}</div> - Theo {source} |{" "}
              {timestamp}
            </p>
          </div>
          <FacebookShareButton link={facebookLinkShare} />

          <div class="containerContent">
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      <strong>Có bạn gái</strong>,{" "}
                      <strong>lại thêm bạn gái</strong> (
                      <strong>Kanojo mo kanojo</strong>) là bộ{" "}
                      <strong>anime</strong> hài lãng mạn đã được Muse Việt Nam
                      mua bản quyền anime và hiện đang được công chiếu. Câu
                      chuyện kể về Mukui Naoya, người đã thổ lộ tình cảm với
                      người bạn thời thơ ấu của mình là Saki Saki. Tưởng rằng
                      mối quan hệ này chỉ đi đến đây nhưng một ngày nọ, Naoya
                      lại được một cô bạn khác tên là Minase Nagisa thổ lộ tình
                      cảm. Ban đầu cậu lưỡng lự suy nghĩ thế nhưng rồi cậu quyết
                      định rằng Saki và Nagisa sẽ trở thành bạn gái của cậu. Do
                      Naoya hiện đang sống một mình vì bố mẹ cậu đi công tác nên
                      cậu quyết định sống chung với hai người. Câu chuyện mối
                      tình tay ba từ đó mà bắt đầu.
                    </p>
                    <p>
                      Chính bởi vì có nội dung mới lạ và những cô nàng waifu khả
                      ái mà "<strong>Có bạn gái</strong>,{" "}
                      <strong>lại thêm bạn gái</strong>" đang được khá nhiều
                      người theo dõi hiện nay. Thậm chí các fan từ manga gốc của
                      tác phẩm này còn bỏ công bỏ sức để làm hẳn loạt ảnh so
                      sánh những hình ảnh trong trang truyện khi đưa lên{" "}
                      <strong>anime</strong> thì sẽ như thế nào.
                    </p>
                    <p>Nếu bạn cũng tò mò thì hãy xem ngay ở dưới đây nhé!</p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291028574942118200277.jpg"
                      alt="1, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291028636842099906943.jpg"
                      alt="2, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291028703011912979480.jpg"
                      alt="3, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291028769921790640935.jpg"
                      alt="4, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291028830001913157418.jpg"
                      alt="5, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291028887911239970266.jpg"
                      alt="6, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629102894571785259817.jpg"
                      alt="7, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16291029003601981720765.jpg"
                      alt="8, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629102908774306900240.jpg"
                      alt="9, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291029146021909763731.jpg"
                      alt="10, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629105633713582608151.jpg"
                      alt="11, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291056393962025924009.jpg"
                      alt="12, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhìn vào loạt ảnh trên chúng ta có thể nhận ra rằng nét vẽ
                      của bộ manga <strong>Kanojo mo kanojo</strong> đã rất xuất
                      sắc, từng được nét được trau chuốt tỉ mỉ rồi, nhưng khi
                      lên <strong>anime</strong>, có thêm màu sắc sinh động càng
                      làm các fan được thỏa mãn hơn nữa.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629105645494795196657.jpg"
                      alt="13, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629105651828526935625.jpg"
                      alt="14, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-1629105656934681144878.jpg"
                      alt="15, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629105662731194221616.jpg"
                      alt="16, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291056682801703297996.jpg"
                      alt="17, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629105679684443114061.jpg"
                      alt="18, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291056850322037832864.jpg"
                      alt="19, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291056900051234313320.jpg"
                      alt="20, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16291056955632138779017.jpg"
                      alt="21, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-1629105702004456438696.jpg"
                      alt="22, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/16/photo-1-16291057085901387245729.jpg"
                      alt="23, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/16/photo-1-16291057140991760459967.jpg"
                      alt="24, ANIME,SO SÁNH ANIME VÀ MANGA,CÓ BẠN GÁI,LẠI THÊM BẠN GÁI,KANOJO MO KANOJO,ANIME MÙA HÈ,"
                      note=""
                    />

                    <p>
                      Các bạn có hài lòng với chất lượng của{" "}
                      <strong>anime</strong> so với manga của{" "}
                      <strong>Kanojo mo kanojo</strong> hay không? Hãy chia sẻ
                      suy nghĩ của mình nhé!
                    </p>
                    <p>Nguồn ảnh: Com kanda</p>
                  </div>
                  <AdsHorizontal />
                </div>
              </div>

              <RandomFeature />

              <div className="source">Source: {source}</div>

              <FacebookShareButton link={facebookLinkShare} />

              <div className="tags">Tags: {updatedTags}</div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
