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
"timestamp": '13/08/2021 09:26 AM',
"title": 'Lắc lư, ngả ngốn trên ghế khi lên sóng, nữ streamer xinh đẹp gặp tai nạn, tiếp đất bằng mặt và cái kết để lại nhiều nghi vấn',
"description": 'Một số người thậm chí còn tình nghi rằng phải chăng đây là kịch bản mà cô nàng streamer này cố tình dàn dựng ra nữa.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-2-1628843711216357538514.jpg',
"alt": 'streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,',
"category": 'images',
"date": '13/08/2021',
"time": '09:26 AM',
"link": '/lac-lu-nga-ngon-tren-ghe-khi-len-song-nu-streamer-xinh-dep-gap-tai-nan-tiep-dat-bang-mat-va-cai-ket-de-lai-nhieu-nghi-van',
"zcomponent": 'page_20210813092604',
"filepath": './20210813092604-lac-lu-nga-ngon-tren-ghe-khi-len-song-nu-streamer-xinh-dep-gap-tai-nan-tiep-dat-bang-mat-va-cai-ket-de-lai-nhieu-nghi-van.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Lắc lư, ngả ngốn trên ghế khi lên sóng, nữ streamer xinh đẹp gặp tai nạn, tiếp đất bằng mặt và cái kết để lại nhiều nghi vấn";
const author = "MẶT TRỨNG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "13/08/2021 09:26 AM";
const description =
  "Một số người thậm chí còn tình nghi rằng phải chăng đây là kịch bản mà cô nàng streamer này cố tình dàn dựng ra nữa.";
const link =
  "lac-lu-nga-ngon-tren-ghe-khi-len-song-nu-streamer-xinh-dep-gap-tai-nan-tiep-dat-bang-mat-va-cai-ket-de-lai-nhieu-nghi-van";
const tagparam = [
  "streamer",
  "gặp tai nạn",
  "thân hình nóng bỏng",
  "Người mẫu ảnh",
  "cộng đồng mạng",
  "Phát triển bản thân",
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

export default function page_20210813092604() {
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
                      Một số người thậm chí còn tình nghi rằng phải chăng đây là
                      kịch bản mà cô nàng <strong>streamer</strong> này cố tình
                      dàn dựng ra nữa.
                    </p>
                    <p>
                      Khi nhắc tới những tai nạn của giới{" "}
                      <strong>streamer</strong>, đặc biệt là với các cô nàng hot
                      girl xinh đẹp, đa số đều sẽ liên tưởng ngay tới hình ảnh
                      của các pha hớ hênh, "lộ hàng" hay thậm chí là khoe thân
                      phản cảm. Tuy nhiên, vẫn còn đó những vụ tai nạn mang đúng
                      nghĩa đen của nó, hoàn toàn trong sáng và mang đậm tính
                      hài hước. Điển hình như trường hợp của Coco - một nữ
                      streamer cũng không kém phần xinh đẹp, gợi cảm nhưng tuyệt
                      đối lại nói không với chiêu trò dưới đây.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-1-16288437020681785040971.jpg"
                      alt="1, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note="Coco - nữ streamer xinh đẹp trong câu chuyện"
                    />
                    <p>
                      Với việc sở hữu gương mặt đáng yêu cùng{" "}
                      <strong>thân hình nóng bỏng</strong>, Coco đã xây dựng
                      được tên tuổi của mình từ những năm 2016. Tới thời điểm
                      hiện nay, nàng <strong>streamer</strong> này vẫn đang được
                      coi là một trong những cái tên thuộc top đầu tại Hàn Quốc.
                      Cực kỳ gợi cảm, thậm chí còn{" "}
                      <strong>phát triển bản thân</strong> theo con đường{" "}
                      <strong>người mẫu ảnh</strong>, thế nhưng Coco lại khá
                      "sạch" với các scandal, lùm xùm và trên hết chẳng bao giờ
                      có những tình huống tai nạn, khoe thân hớ hênh phản cảm.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-1-16288437105761886471064.jpg"
                      alt="2, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note="Nàng hot girl cũng sở hữu thân hình rất gợi cảm"
                    />
                    <p>
                      Cô nàng rất "sạch" với không một scandal nào trong suốt sự
                      nghiệp
                    </p>
                    <p>
                      Ấy thế nhưng mới đây thôi, cô nàng xinh đẹp này lại bất
                      ngờ trở thành nạn nhân bất đắc dĩ trong một lần lên sóng.
                      Cụ thể, chẳng hiểu do ngồi lắc lư, nhún nhảy hay đung đưa
                      thế nào mà chiếc ghế gaming của Coco bất ngờ chẳng thể
                      chịu nổi sức nặng từ chủ nhân của mình mà bất ngờ đổ sập,
                      khiến nàng <strong>streamer</strong> ngã ngửa, dúi dụi
                      xuống mặt sàn. Tuy nhiên, cũng may là cô nàng đã kịp "đổ
                      người" vào đống gấu bông phía sau, chứ không thì hậu quả
                      có lẽ còn khó lường hơn nhiều.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/203336854389633024/2021/8/13/photo-3-16288437108871099339563.gif"
                      alt="10, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note=""
                    />

                    <p>
                      Cũng may là cô nàng kịp tiếp đất bằng "mặt" vào đống gấu
                      bông
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhưng có vẻ như sau quá nhiều những vụ tai nạn tự phát,
                      tính đa nghi từ phía <strong>cộng đồng mạng</strong> và
                      người xem cũng đồng thời tăng cao hơn thì phải. Vụ việc
                      của Coco nhanh chóng trở thành từ khóa tìm kiếm hot, nhưng
                      ở chiều hướng ngược lại, cũng có không ít người đặt nghi
                      vấn rằng phải chăng đây là một tai nạn "cố tình" từ phía
                      của Coco. Bằng chứng mà họ đưa ra là cách mà nữ{" "}
                      <strong>streamer</strong> này ngã rất đẹp, rất giống nhưng
                      lại tiếp đất mà không hề hấn gì.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-4-16288437109411031879692.jpg"
                      alt="3, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note="Tai nạn khó đỡ trên sóng cửa Coco"
                    />

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-6-1628843710809382111683.png"
                      alt="4, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note="Ngã sấp mặt tới cỡ ấy, thế nhưng Coco vẫn bị nhiều người nghi ngờ"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-7-16288437106811833804595.jpg"
                      alt="5, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note="Thậm chí cho rằng cô nàng cố tình dàn dựng tình huống ấy để tìm kiếm tương tác"
                    />
                    <p>
                      Thật ra thì cũng khó cho Coco thật. Có vẻ{" "}
                      <strong>cộng đồng mạng</strong> quá đa nghi mà thôi chứ
                      bản thân nàng <strong>streamer</strong> cũng chẳng thiếu
                      "fame". Hiện tại, chỉ riêng trang cá nhân của Coco cũng đã
                      có tới gần nửa triệu lượt follow rồi và với nhan sắc của
                      mình, nàng hot girl chẳng cần làm gì cũng tự nổi nên có lẽ
                      không nhất thiết phải đánh cược sự đau đớn của mình qua vụ
                      tai nạn để thu hút thêm sự quan tâm đâu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-8-1628843710847413447835.jpg"
                      alt="6, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note="Coco vốn đã quá nổi rồi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-8-1628843710847413447835.jpg"
                      alt="7, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note="Có lẽ chẳng cần tăng tương tác theo cách như thế này nữa đâu"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-2-1628843711216357538514.jpg"
                      alt="8, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/13/photo-5-1628843710531509863919.jpg"
                      alt="9, streamer,gặp tai nạn,thân hình nóng bỏng,Người mẫu ảnh,cộng đồng mạng,Phát triển bản thân,"
                      note=""
                    />

                    <p>Ảnh: Internet</p>
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
