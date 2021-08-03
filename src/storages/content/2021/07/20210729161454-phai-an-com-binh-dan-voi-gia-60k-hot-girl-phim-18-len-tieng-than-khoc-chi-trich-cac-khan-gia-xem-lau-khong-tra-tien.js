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
"timestamp": '29/07/2021 04:14 PM',
"title": 'Phải ăn cơm bình dân với giá 60k, hot girl phim 18+ lên tiếng than khóc, chỉ trích các khán giả "xem lậu" không trả tiền',
"description": 'Cô nàng hot girl thừa nhận chưa bao giờ công việc của mình khủng hoảng như vậy.',
"src": '',
"alt": 'GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,MISASHI HORIUCHI,AV,PHIM AV,PHIM 18+,',
"category": 'images',
"date": '29/07/2021',
"time": '04:14 PM',
"link": '/phai-an-com-binh-dan-voi-gia-60k-hot-girl-phim-18-len-tieng-than-khoc-chi-trich-cac-khan-gia-xem-lau-khong-tra-tien',
"zcomponent": 'page_20210729161454',
"filepath": './20210729161454-phai-an-com-binh-dan-voi-gia-60k-hot-girl-phim-18-len-tieng-than-khoc-chi-trich-cac-khan-gia-xem-lau-khong-tra-tien.js'
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
  'Phải ăn cơm bình dân với giá 60k, hot girl phim 18+ lên tiếng than khóc, chỉ trích các khán giả "xem lậu" không trả tiền';
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "29/07/2021 04:14 PM";
const description =
  "Cô nàng hot girl thừa nhận chưa bao giờ công việc của mình khủng hoảng như vậy.";
const link =
  "phai-an-com-binh-dan-voi-gia-60k-hot-girl-phim-18-len-tieng-than-khoc-chi-trich-cac-khan-gia-xem-lau-khong-tra-tien";
const tagparam = [
  "GÁI XINH",
  "CỘNG ĐỒNG MẠNG",
  "HOT GIRL",
  "MISASHI HORIUCHI",
  "AV",
  "PHIM AV",
  "PHIM 18+",
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

export default function page_20210729161454() {
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
                      Không thể phủ nhận một thực tế rằng thành quả phát triển
                      trong những năm vừa qua của ngành công nghiệp{" "}
                      <strong>AV</strong> Nhật Bản đang phải đối diện với thách
                      thức vô cùng to lớn, mà cụ thể ở đây chính là ảnh hưởng
                      của dịch bệnh. Rất nhiều studio trở nên điêu đứng, trong
                      khi đa số các diễn viên, trừ những cô nàng{" "}
                      <strong>hot girl</strong> top đầu cũng đang liên tục phải
                      than trời về sự sụt giảm trong thu nhập cũng như chế độ
                      của mình. Điển hình như mới đây,{" "}
                      <strong>Misashi Horiuchi</strong> - một cô nàng diễn viên
                      cũng khá có tên tuổi đã phải lên tiếng trên trang cá nhân,
                      phàn nàn về việc ngay cả suất ăn trưa cũng đã trở nên "khó
                      nuốt" hơn bao giờ hết.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/photo-1-16255469882221858095041.jpg"
                      alt="1, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,MISASHI HORIUCHI,AV,PHIM AV,PHIM 18+,"
                      note="Misashi Horiuchi - cô nàng hot girl trong câu chuyện"
                    />
                    <p>
                      Cụ thể, trên Twitter, Misashi đã phàn nàn về việc ngày
                      càng có nhiều bộ phim hạng A bị vi phạm bản quyền, qua đó
                      trực tiếp khiến cho doanh thu của ngành công nghiệp{" "}
                      <strong>AV</strong> Nhật Bản bị sụt giảm đáng kể. Điều này
                      vô hình chung cũng dẫn tới việc ngân sách để sản xuất, đầu
                      tư cho các tác phẩm mới cũng chẳng còn là bao nhiêu. Và
                      theo như Misashi chia sẻ, trong tác phẩm mới nhất này, cô
                      thậm chí còn không có chuyên gia trang điểm, phải tự làm
                      lấy mọi việc và tệ hơn, ngay cả suất cơm trưa trên phim
                      trường cũng đã bị hạ giá xuống chỉ còn 300 yên (khoảng
                      60.000 VND) - một con số mà như nàng{" "}
                      <strong>hot girl</strong> chia sẻ là không thể chấp nhận
                      nổi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/-162554739847945012949.jpg"
                      alt="2, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,MISASHI HORIUCHI,AV,PHIM AV,PHIM 18+,"
                      note="Nàng hot girl chia sẻ việc không dám nhận những kịch bản phải make up nhiều vì không có thợ trang điểm"
                    />
                    <p>
                      Dành cho những ai chưa biết thì đa phần các diễn viên có
                      tên tuổi hoặc thuộc top đầu của ngành công nghiệp{" "}
                      <strong>AV</strong> Nhật Bản đều sẽ được hỗ trợ bữa trưa
                      ngay tại trường quay. Ở thời kỳ vàng son, đó thường là
                      những suất buffet thịnh soạn, nhưng giờ đây, như lời
                      Misashi, nó chẳng khác gì hộp cơm bình dân với mức giá ấy.
                      Bảo sao cô nàng tỏ ra bức xúc tới vậy.
                    </p>
                    <RelationNewsInPage category={category} />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/-16255477000941175435959.jpg"
                      alt="3, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,MISASHI HORIUCHI,AV,PHIM AV,PHIM 18+,"
                      note="Ngay cả suất cơm trưa cũng bị giảm giá chỉ còn 60k"
                    />
                    <p>
                      Nâng cao quan điểm hơn nữa, nàng <strong>hot girl</strong>{" "}
                      còn cho rằng đây là bi kịch của cả ngành công nghiệp. "Nếu
                      tất cả mọi người muốn tạo ra một môi trường tốt, xem các
                      tác phẩm chất lượng cao, hãy mua các bộ phim{" "}
                      <strong>AV</strong> chính hãng, đừng xem lậu nữa" -
                      Misashi bức xúc.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/-16255478010812016927052.jpg"
                      alt="4, GÁI XINH,CỘNG ĐỒNG MẠNG,HOT GIRL,MISASHI HORIUCHI,AV,PHIM AV,PHIM 18+,"
                      note="Cô nàng kêu gọi các fan hãy bỏ tiền ra mua phim chính hãng, đừng xem lậu"
                    />
                    <p>
                      Lời chia sẻ của Misashi nhanh chóng được rất nhiều fan hâm
                      mộ hưởng ứng và nhiều người thậm chí còn cảm thấy xót xa
                      cho cô nàng. Tuy nhiên, ở chiều ngược lại, cũng có không
                      ít người chê bai về việc nàng <strong>hot girl</strong>{" "}
                      lên tiếng than thở, khi cho rằng cô còn hạnh phúc hơn
                      nhiều so với những người đồng nghiệp kém may mắn chẳng có
                      phim mà đóng trong quãng thời gian này. Thực tế thì bức
                      xúc của Misashi cũng hợp lý, nhưng để chấm dứt thói quen
                      "xem lậu" từ phía các khán giả của ngành công nghiệp{" "}
                      <strong>AV</strong> thì quả là khó khăn và chẳng biết phải
                      kéo dài tới ngày tháng năm nào nữa.
                    </p>
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
