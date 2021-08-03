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
"timestamp": '29/06/2021 09:44 PM',
"title": '7 bí ẩn nổi tiếng thường xuyên bị hiểu nhầm do thế lực thần bí gây ra, nhưng lời giải hóa ra lại khá đơn giản',
"description": 'Lời giải cho những bí ẩn này hóa ra lại đơn giản hơn chúng ta tưởng!',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-1-1624173966024705477776.jpg',
"alt": 'VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,',
"category": 'news',
"date": '29/06/2021',
"time": '09:44 PM',
"link": '/7-bi-an-noi-tieng-thuong-xuyen-bi-hieu-nham-do-the-luc-than-bi-gay-ra-nhung-loi-giai-hoa-ra-lai-kha-don-gian',
"zcomponent": 'page_20210629214425',
"filepath": './20210629214425-7-bi-an-noi-tieng-thuong-xuyen-bi-hieu-nham-do-the-luc-than-bi-gay-ra-nhung-loi-giai-hoa-ra-lai-kha-don-gian.js'
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
  "7 bí ẩn nổi tiếng thường xuyên bị hiểu nhầm do thế lực thần bí gây ra, nhưng lời giải hóa ra lại khá đơn giản";
const author = "Đức 2 Xích";
const source = "Pháp Luật & Bạn Đọc";
const timestamp = "29/06/2021 09:44 PM";
const description =
  "Lời giải cho những bí ẩn này hóa ra lại đơn giản hơn chúng ta tưởng!";
const link =
  "7-bi-an-noi-tieng-thuong-xuyen-bi-hieu-nham-do-the-luc-than-bi-gay-ra-nhung-loi-giai-hoa-ra-lai-kha-don-gian";
const tagparam = [
  "VĂN MINH MAYA",
  "LỊCH SỬ LOÀI NGƯỜI",
  "NHÀ KHOA HỌC",
  "NGƯỜI NGOÀI HÀNH TINH",
  "THUNG LŨNG CHẾT",
  "PHẢN ỨNG HÓA HỌC",
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

export default function page_20210629214425() {
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
                    <h4>
                      1. Sự biến mất của nền <strong>văn minh Maya</strong> là
                      do tự họ gây ra
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-1-1624173966024705477776.jpg"
                      alt="1, VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,"
                      note=""
                    />
                    <p>
                      Đây là một trong những sự sụp đổ xã hội khét tiếng nhất
                      trong <strong>lịch sử loài người</strong>. Người Maya
                      dường như đã từ bỏ nền văn minh phức tạp của họ và biến
                      mất vào rừng rậm Trung Mỹ chỉ trong 1 nốt nhạc.
                    </p>
                    <p>
                      Trong nhiều thế kỷ, mọi người hoang mang về sự biến mất và
                      đưa ra giả thuyết để xoa dịu sự tò mò: Từ việc người Maya
                      tự tổ chức nội chiến rồi tàn sát lẫn nhau, cho đến cuộc
                      chinh phục của những kẻ ngoại bang, thậm chí là đánh nhau
                      với UFO!
                    </p>
                    <p>
                      Cho đến năm 2012, một giả thuyết được đưa ra và được các{" "}
                      <strong>nhà khoa học</strong> ủng hộ nhiều nhất: Nền{" "}
                      <strong>văn minh Maya</strong> sụp đổ do thảm họa môi
                      trường mà chính họ tự gây ra. Người Maya đã chặt quá nhiều
                      cây cối, việc này làm giảm khả năng hấp thụ bức xạ mặt
                      trời của cây cối nơi đây.
                    </p>
                    <p>
                      Điều này làm cho lượng mưa trở nên khan hiếm hơn, gây ra
                      hạn hán nghiêm trọng. Người Maya từ bỏ đất đai của họ
                      không phải do <strong>người ngoài hành tinh</strong> hay
                      cuộc nổi dậy hoành tráng nào đâu, họ bỏ đi để tìm thức ăn
                      thôi.
                    </p>
                    <h4>
                      2. Những tảng đá tự di chuyển ở{" "}
                      <strong>Thung lũng Chết</strong>, thực ra chúng không thần
                      kỳ như bạn tưởng đâu
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-1-16241739682851195379240.jpg"
                      alt="2, VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,"
                      note=""
                    />
                    <p>
                      Racetrack Playa là một lòng hồ bằng phẳng, khô ráo ở giữa
                      sa mạc có độ cao thấp nhất ở Bắc Mỹ. Đây cũng là nơi có
                      những "tảng đá tự di chuyển" bí ẩn đã gây khó hiểu cho du
                      khách từ đầu những năm 1900.
                    </p>
                    <p>
                      Đá ở đây với nhiều kích thước khác nhau nằm rải rác bên
                      trong lòng hồ. Hầu hết chúng là những khối đá có đường
                      kính nhỏ (từ 15 cm đến 45 cm), nhưng đôi khi cũng xuất
                      hiện những tảng đá khổng lồ nặng hơn 300 kg. Các hòn đá
                      chỉ di chuyển từ hai năm đến ba năm một lần, và tất cả
                      chúng không di chuyển cùng lúc hoặc theo cùng một hướng.
                    </p>
                    <p>
                      Nhưng thực ra mọi thứ đã được giải thích vào năm 2011, khi
                      các <strong>nhà khoa học</strong> phát hiện nơi đây thi
                      thoảng sẽ có mưa tuyết, nước mưa đọng lại ở đáy hồ phẳng
                      và đóng băng. Khi tan ra, chúng sẽ tạo thành những đợt
                      sóng xô đẩy, điều này khiến những hòn đá nằm dưới hồ sẽ
                      lăn theo sóng.
                    </p>
                    <p>
                      Nhiều giả thuyết đã được đưa ra để giải thích hiện tượng
                      này, bao gồm gió mạnh, sức hút của từ trường Trái đất, một
                      kẻ chơi khăm tài ba - hay một lần nữa là do{" "}
                      <strong>người ngoài hành tinh</strong>.
                    </p>
                    <h4>
                      3. <strong>Người ngoài hành tinh</strong> chẳng liên quan
                      gì tới một chiếc cột 1.600 tuổi bí ẩn ở Ấn Độ
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-2-1624173968315418391753.jpg"
                      alt="3, VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,"
                      note=""
                    />
                    <p>
                      Cột sắt Delhi được đúc vào thế kỷ thứ 5, và nằm ở trung
                      tâm của đền thờ Hồi giáo Quwwat-ul-Islam Mosque ở Delhi,
                      Ấn Độ. Nó có chiều cao 7,2 m tính từ mặt đất và tổng trọng
                      lượng khoảng 10 tấn.
                    </p>
                    <p>
                      Điều làm người ta kinh ngạc là cột sắt đứng lộ thiên đã
                      hơn 1.600 năm, trải qua không biết bao mưa gió cho tới tận
                      ngày nay vẫn không thấy một vết gỉ sét nào. Trong khi đó,
                      sắt là kim loại rất dễ gỉ sau vài chục năm chứ không cần
                      nói tới hơn nghìn năm.
                    </p>
                    <p>
                      Nhưng hóa ra, cây cột này vô tình được bao phủ bởi một hợp
                      chất của sắt, oxy và hidro do. Chính hợp chất này đã ngăn
                      cản không cho kim loại sắt của chiếc cột tiếp xúc với
                      không khí. Nhờ đó, phản ứng ăn mòn do{" "}
                      <strong>phản ứng hóa học</strong> không thể xảy ra, khiến
                      cột sắt trở nên bất diệt.
                    </p>
                    <p>
                      Chính công nghệ luyện kim lạc hậu thế kỷ thứ IV đã vô tình
                      tạo ra hợp chất này, chứ không phải do{" "}
                      <strong>người ngoài hành tinh</strong> gì sất.
                    </p>
                    <h4>
                      4. Công chúa Anastasia Romanov đã qua đời, nhưng vẫn bị
                      mang tiếng là còn sống
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-3-1624173968373468013021.jpg"
                      alt="4, VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,"
                      note=""
                    />
                    <p>
                      Anastasia Romanov là con gái út của Sa hoàng Nicholas II
                      của Nga, cùng với cha mẹ và các anh chị em, Anastasia bị
                      bắt và bị hành quyết trong Cách mạng Bolshevik. Cô nổi
                      tiếng với những bí ẩn bao quanh cái chết trong nhiều thập
                      kỷ, khi nhiều phụ nữ tự nhận là Anastasia.
                    </p>
                    <p>
                      Trong những năm sau vụ hành quyết gia đình Romanov, các
                      thuyết âm mưu bắt đầu xuất hiện. Bắt đầu từ năm 1920, có
                      tới 20 người phụ nữ đã tuyên bố họ chính là Nữ Công tước
                      Anastasia và viết sách để kiếm tiền!
                    </p>
                    <p>
                      Một lần nữa, các thế lực thần bí bị réo tên và phải chịu
                      trách nhiệm cho đám bản sao của cô công chúa này...
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Năm 1991, một loạt các thi thể được tìm thấy trong rừng
                      bên ngoài Yekaterinburg, và DNA cho thấy chúng thuộc về
                      gia đình Romanov. Các nghiên cứu về DNA đã xác định cả cha
                      và mẹ và cả năm người con, kết luận rằng cả gia đình Sa
                      Hoàng Nicholas II thực sự đã chết vào tháng 7 năm 1918.
                    </p>
                    <h4>
                      5. Số lượng các con tàu mất tích ở Tam giác quỷ Bermuda
                      thực ra chẳng bõ so với các khu vực biển còn lại
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-4-1624173968427286613443.jpg"
                      alt="5, VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,"
                      note=""
                    />
                    <p>
                      Trong nhiều thập kỷ, các thủy thủ, phi công và du khách đã
                      tỏ ra rất sợ hãi khi nghe tới cái tên "Tam giác quỷ
                      Bermuda". Khu vực này nằm ở Đại Tây Dương, và ít nhất 50
                      tàu và 20 máy bay đã biến mất "một cách bí ẩn" ở đó.
                    </p>
                    <p>
                      Những câu chuyện về những vụ mất tích ở khu vực Tam giác
                      quỷ Bermuda có từ nhiều thế kỷ trước nhưng cái tên "Tam
                      giác quỷ Bermuda" thì mới được đặt vào năm 1964 bởi nhà
                      văn khoa học viễn tưởng Vincent Gaddis, phóng viên của tạp
                      chí Argosy.
                    </p>
                    <p>
                      Trong những năm qua, nhiều giả thuyết đã cố gắng giải
                      thích những vụ mất tích này, bao gồm từ trường Trái đất
                      can thiệp vào các thiết bị định vị; những bong bóng khí
                      Metan khổng lồ nổ tung trên bề mặt đại dương; quái vật
                      biển liên minh với <strong>người ngoài hành tinh</strong>;
                      và điều gì đó liên quan đến thành phố Atlantis đã mất.
                    </p>
                    <p>
                      Nhưng khi điều tra kĩ, các <strong>nhà khoa học</strong>{" "}
                      đã nhận ra nhiều vụ biến mất thực chất là vui mồm kể cho
                      nhau, chứ không hề có thật. Thêm vào đó, thống kê từ Cục
                      Hàng Hải Quốc tế đã đo được: Số tàu thuyền biến mất ở
                      Bermuda vẫn thuộc dạng "bét" nếu so với những khu vực biển
                      còn lại trên thế giới.
                    </p>
                    <h4>
                      6. Kim Tự Tháp không phải của{" "}
                      <strong>người ngoài hành tinh</strong>, người Ai Cập thừa
                      thông minh để xây bất kì cái gì họ thích
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-5-16241739684601274769150.jpg"
                      alt="6, VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,"
                      note=""
                    />
                    <p>
                      Thực tế là <strong>người ngoài hành tinh</strong> không hề
                      giúp người Ai Cập xây Kim Tự Tháp, mặc dù những viên đá
                      đúng là hơi nặng thật.
                    </p>
                    <p>
                      Vào năm 2014, các nhà vật lý từ Đại học Amsterdam đã đánh
                      tan tin đồn bằng cách đưa một phương pháp tìm thấy trên
                      bản vẽ một ngôi mộ cổ vào cuộc thử nghiệm. Họ xác định
                      rằng các công nhân đã kéo những khối đá khổng lồ lên một
                      loại xe trượt tuyết. Bằng cách đổ nước lên cát hoặc đất
                      sét trơn như một loại chất bôi trơn, các công nhân đã giảm
                      ma sát của đường đi và kéo các khối lớn để xây dựng các
                      kim tự tháp.
                    </p>
                    <p>Chốt lại, đã bị dí deadline thì phải thông minh thôi.</p>
                    <h4>
                      7. Ma trơi trong các nền văn hóa thế giới và sự thật không
                      như mong đợi
                    </h4>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/20/photo-6-16241739689061211450194.jpg"
                      alt="7, VĂN MINH MAYA,LỊCH SỬ LOÀI NGƯỜI,NHÀ KHOA HỌC,NGƯỜI NGOÀI HÀNH TINH,THUNG LŨNG CHẾT,PHẢN ỨNG HÓA HỌC,"
                      note=""
                    />
                    <p>
                      Không chỉ riêng văn hóa Việt Nam, mà trên khắp thế giới
                      cũng có niềm tin tương tự vào một thứ khá kì bí: Ma trơi.
                    </p>
                    <p>
                      Trong suốt dòng lịch sử Châu Âu, người ta thường kể lại đã
                      nhìn thấy những ánh sáng nhấp nháy bí ẩn trôi nổi trên các
                      đầm lầy vào ban đêm. Họ sợ hãi và cho rằng những đốm sáng
                      này là những linh hồn bị mắc kẹt và lang thang trên Trái
                      đất mãi mãi.
                    </p>
                    <p>
                      Nhưng trong đầm lầy, các chất hữu cơ không có sự sống sẽ
                      bị nhấn chìm và phân hủy dưới lòng đất mà không được tiếp
                      xúc với không khí. Sự phân hủy này tạo ra "khí đầm lầy",
                      một dạng kết hợp của khí mêtan, carbon dioxide, nitơ, phốt
                      phát và các hóa chất khác.
                    </p>
                    <p>
                      Khi khí đầm lầy tiếp xúc với không khí, nó sẽ tự bốc cháy
                      và gây ra hiệu ứng nhấp nháy như ma trơi.
                    </p>
                    <p>Nguồn: Bored Panda</p>
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
