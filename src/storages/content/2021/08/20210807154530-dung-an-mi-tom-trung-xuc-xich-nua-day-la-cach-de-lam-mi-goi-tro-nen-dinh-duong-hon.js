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
"timestamp": '07/08/2021 03:45 PM',
"title": 'Đừng ăn mì tôm trứng xúc xích nữa, đây là cách để làm mì gói trở nên dinh dưỡng hơn',
"description": 'Ăn mì tôm cùng với trứng và xúc xích chẳng khác nào dội bom lên hệ tim mạch của bạn.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-1628314839916736337919.png',
"alt": 'MÌ TÔM,MÌ GÓI,MÌ TÔM TRỨNG XÚC XÍCH,KHOA HỌC,NGHIÊN CỨU,SỨC KHỎE,',
"category": 'news',
"date": '07/08/2021',
"time": '03:45 PM',
"link": '/dung-an-mi-tom-trung-xuc-xich-nua-day-la-cach-de-lam-mi-goi-tro-nen-dinh-duong-hon',
"zcomponent": 'page_20210807154530',
"filepath": './20210807154530-dung-an-mi-tom-trung-xuc-xich-nua-day-la-cach-de-lam-mi-goi-tro-nen-dinh-duong-hon.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "news";
const categoryLink = "/news";
const title =
  "Đừng ăn mì tôm trứng xúc xích nữa, đây là cách để làm mì gói trở nên dinh dưỡng hơn";
const author = "Thanh Long";
const source = "Pháp Luật & Bạn Đọc";
const timestamp = "07/08/2021 03:45 PM";
const description =
  "Ăn mì tôm cùng với trứng và xúc xích chẳng khác nào dội bom lên hệ tim mạch của bạn.";
const link =
  "dung-an-mi-tom-trung-xuc-xich-nua-day-la-cach-de-lam-mi-goi-tro-nen-dinh-duong-hon";
const tagparam = [
  "MÌ TÔM",
  "MÌ GÓI",
  "MÌ TÔM TRỨNG XÚC XÍCH",
  "KHOA HỌC",
  "NGHIÊN CỨU",
  "SỨC KHỎE",
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

export default function page_20210807154530() {
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
                      Đại dịch COVID-19 đang khiến người Việt ăn nhiều{" "}
                      <strong>mì gói</strong> hơn bao giờ hết. Theo thống kê của
                      Hiệp hội Mì ăn liền Thế giới, lượng mì gói được tiêu thụ
                      tại Việt Nam trong năm 2020 đã tăng 30% so với trước đại
                      dịch, mức tăng cao nhất thế giới.
                    </p>
                    <p>
                      Cụ thể, trong năm 2019, người Việt Nam chỉ tiêu thụ 5,43
                      tỷ gói mì thì trong năm đại dịch 2020, con số đã tăng lên
                      7 tỷ gói. Điều này tiếp tục khiến Việt Nam giữ vị trí thứ
                      3 trên bảng xếp hạng những quốc gia ăn{" "}
                      <strong>mì gói</strong> nhiều nhất thế giới.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-1-1628314839916736337919.png"
                      alt="1, MÌ TÔM,MÌ GÓI,MÌ TÔM TRỨNG XÚC XÍCH,KHOA HỌC,NGHIÊN CỨU,SỨC KHỎE,"
                      note=""
                    />
                    <p>
                      Nếu tính tỷ lệ ăn <strong>mì gói</strong> trên đầu người,
                      thì mỗi người Việt Nam đang tiêu thụ bình quân hơn 72 gói
                      mì/năm, chỉ xếp sau Hàn Quốc (80,6 gói mì/người/năm).
                    </p>
                    <p>
                      Mỗi người Việt vì thế cũng đang ăn nhiều{" "}
                      <strong>mì gói</strong> gấp rưỡi Thái Lan, Nhật Bản,
                      Indonesia, Philippines và gấp đôi so với Trung Quốc, gấp 3
                      lần người Mỹ. Năm 2019, trung bình lượng mì gói cả năm mà
                      mỗi người Việt ăn mới chỉ là 57 gói.
                    </p>
                    <p>
                      Điều khiến <strong>mì gói</strong> có thể thống trị các
                      bữa ăn của người Việt là sự tiện lợi. Thông thường, bạn
                      chỉ cần úp mì bằng nước sôi, hoặc thêm một cái trứng và
                      xúc xích vào là đã được một bữa sáng no nê. Nhưng các
                      chuyên gia dinh dưỡng cảnh báo no không có nghĩa là bổ
                      dưỡng. Thay vì nấu mì ăn liền với trứng và xúc xích, bạn
                      có thể biến tấu món ăn này theo nhiều cách để có được
                      nhiều chất dinh dưỡng hơn.
                    </p>
                    <h5>
                      <strong>Mì tôm</strong> trứng xúc xích: Món ăn "dội bom"
                      lên hệ tim mạch
                    </h5>
                    <p>
                      Yếu tố đầu tiên ảnh hưởng đến hệ tim mạch của món ăn
                      "huyền thoại" này đó chính là muối. Một gói mì có thể chứa
                      tới 1.780 g muối, bằng 77% lượng muối khuyến cáo tiêu thụ
                      mỗi ngày. Con số của 2 cái xúc xích tiệt trùng loại 40 g
                      là 600mg muối, tương đương 26% lượng khuyến cáo. Một quả
                      trứng có thể chứa thêm 50 mg muối nữa, tương đương 2%.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-1-16283148413531357511155.jpeg"
                      alt="2, MÌ TÔM,MÌ GÓI,MÌ TÔM TRỨNG XÚC XÍCH,KHOA HỌC,NGHIÊN CỨU,SỨC KHỎE,"
                      note=""
                    />
                    <p>
                      Như vậy, chỉ riêng một tô mì trứng xúc xích đã có thể
                      khiến bạn ăn quá lượng muối được khuyến cáo mỗi ngày. Hiệp
                      hội tim mạch Hoa Kỳ cho biết mỗi ngày một người bình
                      thường không nên ăn quá 2.300mg muối. Những người cao
                      huyết áp chỉ nên ăn dưới 2.000 mg và con số lý tưởng cho
                      tất cả mọi người là 1.500 mg.
                    </p>
                    <p>
                      Hậu quả ngắn hạn của việc ăn quá nhiều muối sẽ khiến bạn
                      khát và phải uống nhiều nước. Muối cũng rút nước ra khỏi
                      tế bào, khiến bạn cảm thấy uể oải, chậm chạp. Trong khi
                      tích nước quá nhiều trong cơ thể sẽ khiến bạn chướng bụng,
                      phù nề và tăng cân.
                    </p>
                    <p>
                      Ngoài ra, ăn quá nhiều muối về lâu về dài sẽ đặt bạn vào
                      nguy cơ cao mắc bệnh tim mạch, cao huyết áp và đột quỵ.
                    </p>
                    <p>
                      Một gói mì có thể chứa tới 1.780 g muối, bằng 77% lượng
                      muối khuyến cáo tiêu thụ mỗi ngày. Thêm 2 cái xúc xích
                      tiệt trùng loại 40 g là 600mg muối, tương đương 26% lượng
                      khuyến cáo. Vậy là đã vượt quá 100%.
                    </p>
                    <p>
                      Yếu tố thứ hai ảnh hưởng đến <strong>sức khỏe</strong> tim
                      mạch của món mì trứng xúc xích là cholesterol. Chất béo
                      này được mệnh danh là kẻ thù số 1 của bệnh tim mạch, bởi
                      dư thừa cholesterol hay nồng độ cholesterol cao trong máu
                      tạo nên các mảng bám trên thành động mạch. Dần dần, nó làm
                      tắc nghẽn mạch máu dẫn đến những cơn đau tim.
                    </p>
                    <p>
                      Do đó, Cơ quan Thực phẩm và Dược phẩm Hoa Kỳ (FDA) khuyến
                      cáo chúng ta không nên ăn quá 300 mg cholesterol mỗi ngày.
                      Đối với người có nguy cơ mắc bệnh tim mạch cao, 200 mg là
                      con số giới hạn. Trong khi đó, một quả trứng có thể chứa
                      tới 186 mg cholesterol. Một cái xúc xích có thể chứa 10-35
                      mg cholesterol.
                    </p>
                    <p>
                      Mặc dù không phải toàn bộ lượng cholesterol trong thực
                      phẩm có thể chuyển vào máu của bạn, Hiệp hội Tim mạch Hoa
                      Kỳ khuyến cáo người khỏe mạnh chỉ nên ăn 1- 2 quả trứng
                      mỗi ngày, ít hơn với người có nguy cơ mắc bệnh tim mạch.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhưng ở đây có hai khái niệm mà bạn phải phân biệt. Một là
                      cholesterol trong chế độ ăn uống, là lượng cholesterol có
                      trong thực phẩm ví dụ như trứng hoặc tôm. Hai là
                      cholesterol huyết thanh (hoặc cholesterol máu), là nồng độ
                      lipoprotein mật độ thấp, LDL cholesterol hay còn gọi là
                      cholesterol "xấu" được sản xuất bởi cơ thể thông qua tác
                      động của chất béo bão hòa.
                    </p>
                    <h5>
                      Chất béo bão hòa làm tăng cholesterol huyết thanh nhiều
                      gấp đôi so với cholesterol từ thực phẩm.
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-2-1628314841872937612160.jpg"
                      alt="3, MÌ TÔM,MÌ GÓI,MÌ TÔM TRỨNG XÚC XÍCH,KHOA HỌC,NGHIÊN CỨU,SỨC KHỎE,"
                      note=""
                    />
                    <p>
                      Chất béo bão hòa làm tăng cholesterol huyết thanh nhiều
                      gấp đôi so với cholesterol từ thực phẩm. Vì vậy, người
                      khỏe mạnh không nên ăn quá 20 g chất béo bão hòa mỗi ngày.
                      Trong khi đó, một gói <strong>mì tôm</strong> đã chứa 7 g
                      chất béo bão hòa. Một cái xúc xích chứa thêm 6 g nữa. Vì
                      vậy, ăn mì tôm cùng với trứng và xúc xích chẳng khác nào
                      dội bom lên hệ tim mạch của bạn.
                    </p>
                    <h5>
                      Vậy làm sao để giúp món <strong>mì gói</strong> trở nên
                      lành mạnh hơn?
                    </h5>
                    <p>
                      Tin tốt là chúng ta có thể làm điều đó một cách dễ dàng.
                      Đầu tiên, nếu loại <strong>mì gói</strong> bạn chọn có gói
                      muối hoặc sốt đi kèm, đừng sử dụng chúng. Thay vào đó, bạn
                      có thể chọn nước thịt, dầu mè, tương miso, xì dầu, nước
                      mắm, cà ri Thái hoặc bột cà ri Nhật. Tất nhiên, chỉ nên
                      nêm vừa gia vị và bạn vẫn phải để ý lượng muối có trong
                      các loại sản phẩm này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/7/photo-3-16283148414212063065157.jpg"
                      alt="4, MÌ TÔM,MÌ GÓI,MÌ TÔM TRỨNG XÚC XÍCH,KHOA HỌC,NGHIÊN CỨU,SỨC KHỎE,"
                      note=""
                    />
                    <p>
                      Tiếp theo, bạn hãy đoạn tuyệt với xúc xích. Món ăn này đã
                      được Tổ chức <strong>Nghiên cứu</strong> Ung thư Quốc tế
                      (IARC) lấy làm ví dụ cho thực phẩm chế biến có thể làm
                      tăng nguy cơ mắc ung thư, đặc biệt là ung thư đại trực
                      tràng. Chỉ cần ăn 1 cái xúc xích mỗi ngày, nguy cơ mắc ung
                      thư đại trực tràng của bạn đã tăng 18%.
                    </p>
                    <p>
                      Trứng, mặc dù chứa nhiều cholesterol, nhưng vẫn là một
                      nguồn protein, sắt, vitamin và khoáng chất lành mạnh. Bạn
                      vẫn có thể ăn 1 quả trứng cùng với <strong>mì gói</strong>
                      , nhưng nếu lo lắng về lượng cholesterol, bạn có thể bỏ đi
                      lòng đỏ trứng và chỉ ăn lòng trắng.
                    </p>
                    <h5>
                      Hãy thêm khoảng 150 g rau củ vào mì để bổ sung vitamin và
                      chất xơ.
                    </h5>
                    <p>
                      Tiếp đó, <strong>mì gói</strong> chỉ là một món ăn giàu
                      carbohydrate, thiếu hoàn toàn chất xơ và vitamin. Do đó,
                      để bổ sung bạn có thể thêm khoảng 150 g rau củ nấu cùng mì
                      của mình. Hãy chọn rau củ đa màu sắc, chẳng hạn như cà
                      rốt, cải ngọt, rau diếp, hành tây, rong biển… thay cho gói
                      rau có sẵn trong mì.
                    </p>
                    <p>
                      Tất cả những lựa chọn này đã cho bạn một bát{" "}
                      <strong>mì gói</strong> có đầy đủ đạm, chất xơ, các vi
                      chất thiết yếu như kali, folate, vitamin A và vitamin C…
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/7/photo-4-16283148414671749800815.jpg"
                      alt="5, MÌ TÔM,MÌ GÓI,MÌ TÔM TRỨNG XÚC XÍCH,KHOA HỌC,NGHIÊN CỨU,SỨC KHỎE,"
                      note=""
                    />
                    <p>
                      Ngoài ra, nếu bạn muốn có một nguồn chất béo lành mạnh hơn
                      chất béo bão hòa trong xúc xích và <strong>mì gói</strong>
                      , hãy chọn ăn kèm nó với các loại thực phẩm chứa chất béo
                      không bão hòa, như cá, quả hạch. Một cốc sinh tố bơ cũng
                      sẽ là lựa chọn hợp lý để bổ sung thêm chất béo tốt cho bữa
                      sáng của bạn.
                    </p>
                    <p>Tham khảo Washingtonpost , Healthline , Michiganus</p>
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
