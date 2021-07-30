import React from "react";
import "components/page.css";
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
"timestamp": '29/07/2021 04:23 PM',
"title": 'Dàn sao nữ tỏ thái độ vì phát hiện “yêu râu xanh” Ngô Diệc Phàm: Triệu Lệ Dĩnh - Angela Baby cực phũ, Lưu Diệc Phi ám ảnh sau nụ hôn ngấu nghiến',
"description": 'Sau loạt bê bối của Ngô Diệc Phàm, những lời chia sẻ của dàn sao nữ liên quan đến ngôi sao này liên tiếp bị đào lại.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627191894233494817409.jpg',
"alt": 'ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,',
"category": 'stars',
"date": '29/07/2021',
"time": '04:23 PM',
"link": '/dan-sao-nu-to-thai-do-vi-phat-hien-yeu-rau-xanh-trong-ngo-diec-pham-trieu-le-dinh-angela-dap-cuc-phu-luu-diec-phi-ne-voi-vi-am-anh',
"zcomponent": 'page_20210729162335',
"filepath": './20210729162335-dan-sao-nu-to-thai-do-vi-phat-hien-yeu-rau-xanh-trong-ngo-diec-pham-trieu-le-dinh-angela-dap-cuc-phu-luu-diec-phi-ne-voi-vi-am-anh.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "stars";
const categoryLink = "/stars";
const title =
  "Dàn sao nữ tỏ thái độ vì phát hiện “yêu râu xanh” Ngô Diệc Phàm: Triệu Lệ Dĩnh - Angela Baby cực phũ, Lưu Diệc Phi ám ảnh sau nụ hôn ngấu nghiến";
const author = "NHÃ AN,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "29/07/2021 04:23 PM";
const description =
  "Sau loạt bê bối của Ngô Diệc Phàm, những lời chia sẻ của dàn sao nữ liên quan đến ngôi sao này liên tiếp bị đào lại.";
const link =
  "dan-sao-nu-to-thai-do-vi-phat-hien-yeu-rau-xanh-trong-ngo-diec-pham-trieu-le-dinh-angela-dap-cuc-phu-luu-diec-phi-ne-voi-vi-am-anh";
const tagparam = [
  "ngô diệc phàm",
  "triệu kim mạch",
  "Angela Baby",
  "triệu lệ dĩnh",
  "Lưu Diệc Phi",
  "Tần Ngưu Chính Uy",
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

export default function page_20210729162335() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <p>
                    Sau khi bê bối tình dục rúng động của{" "}
                    <strong>Ngô Diệc Phàm</strong> nổ ra, hàng loạt các nhãn
                    hàng cắt đứt hợp đồng. Những mối quan hệ thân thiết trong
                    giới của nam ca sĩ đồng loạt im bặt, không đưa ra bất cứ
                    phản hồi nào liên quan đến người đàn ông thị phi nhất làng
                    giải trí xứ Trung thời điểm hiện tại.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627191894233494817409.jpg"
                    alt="1, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Tuy nhiên, đây cũng là lúc những câu chuyện cũ do chính
                    người trong cuộc giãi bày trở thành chủ đề nóng. Từng hợp
                    tác với nhiều sao nữ, <strong>Ngô Diệc Phàm</strong> từng
                    gây ấn tượng với hình ảnh điển trai, ga lăng, tuy nhiên, đã
                    có không ít nữ minh tinh ngầm đưa ra "tín hiệu đỏ" về thói
                    dâm dục, lời nói lẫn hành động đều ẩn chứa vấn đề nhạy cảm
                    của nam diễn viên/ca sĩ này.
                  </p>
                  <h5>Triệu Lệ Dĩnh</h5>{" "}
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627184915064629382686.jpeg"
                    alt="2, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    <strong>Triệu Lệ Dĩnh</strong> và{" "}
                    <strong>Ngô Diệc Phàm</strong> từng tham gia show truyền
                    hình 72 Tầng Kỳ Lâu. Thời điểm đó, có vô số người hâm mộ
                    "ship" cặp đôi này vì nhiều hành động, biểu cảm thân thiết
                    của Ngô Diệc Phàm dành cho nữ thần họ Triệu. Tuy nhiên,
                    Triệu Lệ Dĩnh tỏ thái độ cứng rắn khi bị đàn em kém 4 tuổi
                    "thả thính" sởn da gà.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-162718495554199627884.jpeg"
                    alt="3, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Trong 1 thử thách đi giữa sa mạc, nữ diễn viên "Sam Sam"
                    gắng sức đi trước, <strong>Ngô Diệc Phàm</strong> đi theo
                    sau liên tục than mệt, kéo tay đàn chị.{" "}
                    <strong>Triệu Lệ Dĩnh</strong> tỏ thái độ không tự nhiên,
                    hoàn toàn miễn cưỡng vì người em cao to như cố gắng cản
                    bước. Biểu cảm của nữ diễn viên toát lên 2 chữ "cạn lời",
                    thậm chí còn trợn mắt cảnh cáo.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-16271853968391559526070.jpeg"
                    alt="4, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Trong 1 lần khác, khi thực hiện thử thách dùng ống hút thổi
                    bay đạo cụ trên cây, <strong>Triệu Lệ Dĩnh</strong> hỏi đàn
                    em: "Em chuyên ca hát thì chắc dung tích phổi phải tốt lắm
                    nhỉ?". <strong>Ngô Diệc Phàm</strong> đổi giọng nhõng nhẽo:
                    "Sao chị biết là em hát, chị cứ thế này là em xấu hổ lắm
                    đó". Triệu Lệ Dĩnh thẳng thắn trả lời lại: "Nào, ăn nói cho
                    đường hoàng đi".
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-16271853886371974810615.jpeg"
                    alt="5, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Trong show này, <strong>Ngô Diệc Phàm</strong> tỏ thái độ
                    quan tâm tới <strong>Triệu Lệ Dĩnh</strong>, đặc biệt nhất
                    là cử chỉ bóp vai cô tình tứ. Vốn có vóc dáng nhỏ nhắn hơn
                    hẳn so với đàn em, Triệu Lệ Dĩnh dường như khó lòng trốn
                    thoát khỏi hành động của Ngô Diệc Phàm nhưng gương mặt thì
                    lộ rõ biểu cảm đơ cứng, không thoải mái với đàn em.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627185384105659075397.jpeg"
                    alt="6, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Không giống như <strong>Triệu Lệ Dĩnh</strong>,{" "}
                    <strong>Lưu Diệc Phi</strong> lại hợp tác với nam ca sĩ họ
                    Ngô trong bộ phim Hoá Ra Anh Vẫn Ở Đây. Diễn xuất tệ của cả
                    2 người, đặc biệt là của <strong>Ngô Diệc Phàm</strong> đã
                    biến đây trở thành thảm hoạ phòng vé, tuy nhiên, với nàng
                    "Thần tiên tỷ tỷ", ác mộng lại nằm ở những cảnh hôn với Ngô
                    Diệc Phàm.
                  </p>
                  <p>
                    Trong 1 bài phỏng vấn, <strong>Lưu Diệc Phi</strong> nói:
                    "Các nữ diễn viên đều không muốn diễn cảnh hôn với{" "}
                    <strong>Ngô Diệc Phàm</strong>". Cô nàng thuật lại câu
                    chuyện trước đây của 2 người, khi nam ca sĩ bày tỏ rằng mình
                    không biết diễn cảnh hôn ra sao, hoàn toàn chưa có kinh
                    nghiệm ở phân đoạn này. Lưu Diệc Phi khuyên nhủ rằng hãy
                    tưởng tượng mình là một tổng tài bá đạo đúng nghĩa khi hôn.
                    Chẳng ai ngờ rằng, cảnh quay này, Ngô Diệc Phàm lao vào hôn
                    môi Lưu Diệc Phi 1 cách thô bạo.
                  </p>
                  <p>
                    Kết quả, sau khi hôn xong, đôi môi của{" "}
                    <strong>Lưu Diệc Phi</strong> sưng đỏ, đau nhức. Nữ diễn
                    viên cho rằng đây nào có giống người chưa quay cảnh hôn bao
                    giờ. Màn hôn "xuất sắc phi thường" này khiến Lưu Diệc Phi
                    hoảng sợ và nói rằng không muốn có thêm bất cứ cảnh hôn nào
                    nữa.
                  </p>
                  <p>
                    Trong show truyền hình FOURTRY, <strong>Angela Baby</strong>{" "}
                    cùng <strong>Ngô Diệc Phàm</strong>,{" "}
                    <strong>Triệu Kim Mạch</strong>, Phan Vỹ Bá,... là những
                    thành viên quản lý 1 cửa hàng thời trang. Giữa dàn tiền bối
                    dày dặn kinh nghiệm, Triệu Kim Mạch là thành viên út ít,
                    ngây thơ và mới chỉ 17 tuổi. Ngô Diệc Phàm bày tỏ sự thân
                    thiết quá đà với Kim Mạch nhiều lần, cô bé gượng gạo, thể
                    hiện sự lo ngại.
                  </p>
                  <p>
                    Netizen truyền tay nhau hình ảnh{" "}
                    <strong>Ngô Diệc Phàm</strong> dành ánh mắt "ăn tươi nuốt
                    sống", khó diễn tả thành lời về phía Kim Mạch. Nữ diễn viên
                    mới ở tuổi vị thành niên sợ sệt, đưa ánh nhìn đi chỗ khác.
                    Biểu cảm lạnh toát mồ hôi hột của Kim Mạch gây sốt trở lại
                    giữa bão scandal.
                  </p>
                  <p>
                    Ngoài <strong>Triệu Kim Mạch</strong>, show FOURTRY còn có 1
                    thành viên nữ khác là <strong>Angela Baby</strong>. Netizen
                    nhận ra rằng, trong suốt quá trình quay show, bà xã Huỳnh
                    Hiểu Minh luôn cố gắng bảo vệ cô em gái út, thường xuyên có
                    động thái ngăn cản, đứng về phía em út của show.
                  </p>
                  <p>
                    Trong 1 lần mặc áo phao màu hồng mới, Kim Mạch nhận được
                    nhiều lời ngợi khen vì quá đáng yêu.{" "}
                    <strong>Ngô Diệc Phàm</strong> liên tục nói với Kim Mạch
                    rằng: "Đáng yêu quá", "Đáng yêu thật đấy",... sau đó kéo tay
                    em út: "Nào tan ca, chúng ta đi về nhà thôi, em muốn đưa cô
                    ấy về". <strong>Angela Baby</strong> ngay lập tức nói: "Đây
                    là con gái em đấy à?". Câu hỏi này ngay lập tức nhắc nhở Ngô
                    Diệc Phàm phải giữ khoảng cách với nữ diễn viên tuổi vị
                    thành niên.
                  </p>
                  <p>
                    Trong 1 lần khác, khi <strong>Ngô Diệc Phàm</strong> ngỏ ý
                    muốn <strong>Triệu Kim Mạch</strong> lên ghế phụ ngồi, nữ
                    diễn viên 17 tuổi đã hỏi ngược lại: "Tức là phải ngồi nói
                    chuyện với anh à?". <strong>Angela Baby</strong> tiếp lời:
                    "Có vẻ như cô bé không muốn thế đâu". Lời nói này càng khiến
                    cho Ngô Diệc Phàm cảm thấy chưng hửng, "tụt mood".
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Trong 1 lần miêu tả cảnh tượng bên trong nhà ma, nam ca sĩ
                    nói rằng sẽ có "ma" nhảy ra động chạm vào người, sau đó trực
                    tiếp miêu tả bằng hành động, chuẩn bị đặt tay lên mặt và đầu
                    của Kim Mạch.
                  </p>
                  <p>
                    Thấy em út có ý định lảng tránh bàn tay thân mật quá đà này,
                    Baby ngay lập tức nhắc nhở: "Không có động vào người đâu,
                    không hề có chuyện này". <strong>Ngô Diệc Phàm</strong> lúc
                    này mới dừng hành động thái quá.
                  </p>
                  <p>
                    Giữa lúc drama đấu tố căng thẳng khi 1 loạt các hot girl
                    tung bằng chứng từng bị <strong>Ngô Diệc Phàm</strong> nhắn
                    tin "thả thính" yêu đương, 1 idol khác gây bất ngờ khi có
                    màn đáp trả cực kỳ tỉnh táo, đó chính là Trần Di Phàm - thí
                    sinh từng tham gia show Sáng Tạo Doanh.
                  </p>
                  <p>
                    Khi được bạn bè mai mối, giới thiệu với chủ nhân bản hit
                    Deserve, Trần Di Phàm phản pháo cực gắt: “Kris,{" "}
                    <strong>Ngô Diệc Phàm</strong> ư? Ai dám yêu đương với anh
                    ta cơ chứ. Tôi còn muốn sống”.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627187224450308090789.jpg"
                    alt="7, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Phản ứng này của Trần Di Phàm nhận được nhiều lời khen của
                    người hâm mộ. Dựa theo thời điểm chat là tháng 10 năm 2020,
                    đây cũng chính là lúc <strong>Ngô Diệc Phàm</strong> bắt đầu
                    chuỗi "săn mồi", "bắt cá N tay" với loạt hot girl. Thật may
                    mắn khi thí sinh Sáng Tạo Doanh tỉnh táo, sớm nhận ra bản
                    chất thật và không sập bẫy của nam ca sĩ họ Ngô.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627187959103443698224.jpg"
                    alt="8, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Thời điểm mỹ nhân họ Lý vướng scandal ngoại tình với PGone,
                    từng có thông tin cho rằng, Lý Tiểu Lộ từng nhắn tin mồi
                    chài <strong>Ngô Diệc Phàm</strong>, tuy nhiên nữ diễn viên
                    im lặng, không lên tiếng phản hồi.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-16271882640441485754001.png"
                    alt="9, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Mãi đến khi scandal <strong>Ngô Diệc Phàm</strong> bùng nổ,
                    tin đồn năm xưa giữa anh và Lý Tiểu Lộ lại rộ lên 1 lần nữa.
                    Một netizen đã vào phần bình luận và hỏi thẳng bà xã Giả Nãi
                    Lượng rằng: "Có phải cô gửi tin nhắn mập mờ với Ngô Diệc
                    Phàm không? Cô đúng là loạn thật", vợ cũ Giả Nãi Lượng đáp:
                    "Đừng có mà nói năng linh tinh. Cám ơn".
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/zzzzz-1627188878373759784890.png"
                    alt="10, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    <strong>Tần Ngưu Chính Uy</strong> là người tình tin đồn của{" "}
                    <strong>Ngô Diệc Phàm</strong>. Cả 2 lộ ảnh hẹn hò, đi chơi,
                    thậm chí qua nhà nhau qua đêm. Thời điểm đó, nữ ca sĩ nhận
                    vô số gạch đá từ phía người hâm mộ. Chính vì việc tham gia
                    show Thanh Xuân Có Bạn nên Tần Ngưu Chính Uy bị mang danh
                    hot girl xảo quyệt, lợi dụng tên tuổi của Ngô Diệc Phàm để
                    tiến thân vào showbiz.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627191770950840150148.jpg"
                    alt="11, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>
                    Sau khi bê bối của <strong>Ngô Diệc Phàm</strong> nổ ra,{" "}
                    <strong>Tần Ngưu Chính Uy</strong> có động thái gây chú ý
                    khi ghim bài đăng phản hồi tin đồn hẹn hò của mình và Ngô
                    Diệc Phàm lên đầu trang Weibo: "Tôi vẫn luôn tôn trọng anh
                    Ngô, không có hẹn hò, không có video, không có câu chuyện
                    nào cả". Động thái này của nữ ca sĩ khẳng định rằng mình
                    không còn dây dưa với Ngô Diệc Phàm, càng không có chuyện
                    yêu đương. Giờ đây, Tần Ngưu Chính Uy mong người hâm mộ
                    không réo tên cô giữa drama.
                  </p>
                  <p>
                    Một trong những mỹ nhân lộ ảnh hẹn hò với{" "}
                    <strong>Ngô Diệc Phàm</strong> bị dân tình ghi lại được đó
                    chính là Trần Tiểu Di. Hot girl MXH này được bắt gặp đi xem
                    phim với cựu thành viên EXO tuy nhiên lại không đưa ra phản
                    hồi nào.
                  </p>
                  <p>
                    Mãi tới khi <strong>Ngô Diệc Phàm</strong> vướng vào bê bối
                    tình dục rúng động, lúc này, Trần Tiểu Di mới đứng ra khẳng
                    định rằng mình không hẹn hò với nam ca sĩ. Nhiều netizen
                    nhận định rằng, có lẽ tới tận bây giờ, Trần Tiểu Di mới biết
                    được bản chất thật sự của Ngô Diệc Phàm nên mới vội vã phủ
                    nhận mối quan hệ.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/25/photo-1-1627191715465346579901.jpg"
                    alt="12, ngô diệc phàm,triệu kim mạch,Angela Baby,triệu lệ dĩnh,Lưu Diệc Phi,Tần Ngưu Chính Uy,"
                    note=""
                  />
                  <p>Trần Tiểu Di và màn "quay xe" vội vã</p>
                  <p>Nguồn: Baidu, Weibo</p>
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
