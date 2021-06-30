import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import {
  RandomFeature,
  RelationNews,
  RelationNewsInPage,
} from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": '29/06/2021 09:56 PM',
"title": 'Tự sự của một người làm ngành F&B: "Sạt nghiệp" vì nhiều khách vô ý thức, ra quán cà phê gọi cốc nước vài chục ngàn đồng rồi thản nhiên "đổ bê tông" tới nửa ngày trời',
"description": 'Nếu coi quán cà phê là nơi làm việc miễn phí với wifi "căng đét" và điều hoà mát lạnh, gọi ly nước vài chục ngàn rồi "cắm rễ" tại quán thì hàng quán chúng tôi chỉ có nước... sạt nghiệp!',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/29/a3-1624976235560991831279.jpeg',
"alt": 'quán cà phê,văn hoá,đi cà phê,văn hoá cà phê,chủ quán,kinh doanh,ngành F&B,',
"category": 'life',
"date": '29/06/2021',
"time": '09:56 PM',
"link": '/tu-su-cua-mot-nguoi-lam-nganh-fb-sat-nghiep-vi-nhieu-khach-vo-y-thuc-ra-quan-ca-phe-goi-coc-nuoc-vai-chuc-ngan-dong-roi-than-nhien-do-be-tong-toi-nua-ngay-troi',
"zcomponent": 'page_20210629215613',
"filepath": './20210629215613-tu-su-cua-mot-nguoi-lam-nganh-fb-sat-nghiep-vi-nhieu-khach-vo-y-thuc-ra-quan-ca-phe-goi-coc-nuoc-vai-chuc-ngan-dong-roi-than-nhien-do-be-tong-toi-nua-ngay-troi.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  'Tự sự của một người làm ngành F&B: "Sạt nghiệp" vì nhiều khách vô ý thức, ra quán cà phê gọi cốc nước vài chục ngàn đồng rồi thản nhiên "đổ bê tông" tới nửa ngày trời';
const author = "NHQ,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "29/06/2021 09:56 PM";
const description =
  'Nếu coi quán cà phê là nơi làm việc miễn phí với wifi "căng đét" và điều hoà mát lạnh, gọi ly nước vài chục ngàn rồi "cắm rễ" tại quán thì hàng quán chúng tôi chỉ có nước... sạt nghiệp!';
const link =
  "tu-su-cua-mot-nguoi-lam-nganh-fb-sat-nghiep-vi-nhieu-khach-vo-y-thuc-ra-quan-ca-phe-goi-coc-nuoc-vai-chuc-ngan-dong-roi-than-nhien-do-be-tong-toi-nua-ngay-troi";
const tagparam = [
  "quán cà phê",
  "văn hoá",
  "đi cà phê",
  "văn hoá cà phê",
  "chủ quán",
  "kinh doanh",
  "ngành F&B",
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

export default function page_20210629215613() {
  return (
    <>
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
                    Tôn chỉ hàng đầu trong ngành phục vụ luôn là "khách hàng là
                    thượng đế", đó là điều mà từ khi bước chân vào{" "}
                    <strong>ngành F&B</strong>, chúng tôi đã phải thuộc nằm
                    lòng. Bởi vậy, trong thời đại mà một dãy phố chỉ dài vài
                    trăm mét cũng có đến cả chục <strong>quán cà phê</strong>{" "}
                    san sát, sự cạnh tranh trở nên khốc liệt.
                  </p>
                  <p>
                    Các <strong>quán cà phê</strong> nhỏ ngày càng đua nhau tạo
                    ra nhiều "tiện ích cộng thêm" ngoài "menu chính" là đồ ăn và
                    nước uống như: Decor đẹp, ấn tượng để tạo thành không gian
                    check-in cho giới trẻ - những người có cuộc sống ảo đôi khi
                    còn sôi động và nhiều màu sắc hơn đời sống thật; wifi lúc
                    nào cũng phải "căng đét" dù có hàng chục người đang cùng lúc
                    "cày phim" hay "cày game"; điều hoà luôn phải mát lạnh và
                    chênh lệch cả chục độ so với thời tiết đang đổ lửa bên ngoài
                    và cuối cùng, tại mỗi bàn phải có ít nhất một ổ cắm điện…;
                    với niềm tin rằng những tiện ích cộng thêm đó sẽ giúp quán
                    cà phê nhỏ bé của mình trở nên hấp dẫn hơn trong mắt khách
                    hàng.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/29/a2-16249762355481649330114.jpeg"
                    alt="1, quán cà phê,văn hoá,đi cà phê,văn hoá cà phê,chủ quán,kinh doanh,ngành F&B,"
                    note="Nhiều bạn trẻ chọn quán cà phê làm nơi làm việc, học bài... (Ảnh minh hoạ)"
                  />
                  <p>
                    Tuy nhiên, thực tế 10 năm <strong>kinh doanh</strong> trong
                    ngành này đã khiến chúng tôi được "mở mắt" khá nhiều và rút
                    ra được rất nhiều bài học xương máu, đó là chúng tôi rất dễ
                    "lỗ nặng" hoặc tồi tệ hơn là "sạt nghiệp" khi gặp phải những
                    khách hàng vô ý, chỉ gọi một ly cà phê có giá 20.000 -
                    30.000 đồng nhưng vô tư ngồi tại quán đến 4 - 5 tiếng đồng
                    hồ.
                  </p>
                  <p>
                    Vào những ngày oi nóng, tình trạng này còn tệ hơn khi các vị
                    khách vô tư mang theo laptop, sách vở… và đôi khi là cả đồ
                    ăn đã chuẩn bị sẵn để "ngồi thiền" trong quán tới nửa ngày
                    trời, coi <strong>quán cà phê</strong> là nơi để làm việc và
                    học tập với điều hoà, wifi và nguồn điện miễn phí.
                  </p>
                  <p>
                    Có những người chỉ đi một mình nhưng lại chiếm trọn một bàn
                    dành cho 3 - 4 người, khiến những khách hàng mới đến không
                    còn chỗ ngồi, làm thiệt hại tới doanh thu của quán.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/29/a4-1624976235575863614408.jpeg"
                    alt="3, quán cà phê,văn hoá,đi cà phê,văn hoá cà phê,chủ quán,kinh doanh,ngành F&B,"
                    note=""
                  />
                  <p>
                    Vì hầu hết các <strong>quán cà phê</strong>, đặc biệt là các
                    quán nhỏ đều không có thông báo giới hạn thời gian ngồi ở
                    quán, nên <strong>chủ quán</strong> hay nhân viên phục vụ dù
                    có gặp phải những vị khách vô tư thái quá này thì cũng chỉ
                    đành hậm hực trong lòng mà chẳng có biện pháp nào để xử lý.
                  </p>
                  <p>
                    Sẽ có người nói rằng, tất cả các tiện ích như wifi, điện,
                    điều hoà hay công phục vụ… đều đã được tính trọn trong giá
                    tiền của một ly nước, vậy việc khách hàng sử dụng những thứ
                    đó thì đâu có gì là quá đáng? Nếu bạn từng đi nước ngoài,
                    Thái Lan chẳng hạn, bạn sẽ biết rằng wifi không hề miễn phí.
                    Bạn có thể vào một <strong>quán cà phê</strong> ở Thái để
                    uống nước, nhưng nếu muốn truy cập wifi, bạn sẽ phải trả
                    thêm tiền. Điều đó cũng được áp dụng tương tự ở nhiều khách
                    sạn.
                  </p>
                  <p>
                    Hiện nay, có rất nhiều chuỗi cửa hàng F&B trên thế giới đang
                    sử dụng hình thức này. Thời gian sử dụng wifi tại quán mỗi
                    lần chỉ kéo dài trong khoảng 60 phút. Thế nhưng ở Việt Nam,
                    quốc gia nằm trong trong top 10 nước có giá cước Internet rẻ
                    nhất thế giới, thì giới trẻ lại tư duy rằng mạng Internet và
                    máy lạnh là miễn phí và đương nhiên, họ không xin xỏ cũng
                    chẳng "dùng chùa" nên chẳng việc gì mà phải đắn đo khi sử
                    dụng; và cũng chẳng mảy may quan tâm đến việc cửa hàng người
                    ta đang <strong>kinh doanh</strong> và cần lời lãi.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Tất nhiên, chuyện một <strong>quán cà phê</strong> hay một
                    cửa hàng ăn uống có lời lãi hay không còn phụ thuộc vào
                    nhiều yếu tố, nhưng nếu khách hàng nào cũng có suy nghĩ lợi
                    dụng quán cà phê làm điểm tránh nắng, là nơi làm việc, học
                    tập rồi dùng điện, wifi miễn phí… trong nhiều giờ đồng hồ
                    thì thật sự, cửa hàng đó muốn có lãi cũng là chuyện khó
                    khăn.
                  </p>
                  <p>
                    Việc vận hành một <strong>quán cà phê</strong> dù với quy mô
                    nhỏ cũng đòi hỏi rất nhiều chi phí, trong đó, tiền thuê mặt
                    bằng đã chiếm một phần lớn, sau đó là hàng loạt các loại phí
                    khác như điện, nước, nguyên liệu, nhân viên… Một ly cà phê
                    có giá trung bình chỉ từ 20.000 - 25.000 đồng mà phải "gánh"
                    trên mình bao nhiêu loại chi phí như vậy thì tiền lời thật
                    ra rất thấp. Chủ yếu các quán cà phê nhỏ thường "lấy công
                    làm lãi" hoặc lấy số lượng để bù vào. Bởi vậy, câu chuyện
                    nhiều quán cà phê "sập tiệm" vì gặp phải khách "nhây", chỉ
                    uống một ly nước mà ngồi "câu giờ" tới nửa ngày là chuyện
                    hoàn toàn có thật.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/29/a3-1624976235560991831279.jpeg"
                    alt="2, quán cà phê,văn hoá,đi cà phê,văn hoá cà phê,chủ quán,kinh doanh,ngành F&B,"
                    note=""
                  />
                  <p>
                    Mới đây, trên các trang review ăn uống, Highlands Coffee đã
                    bị một khách hàng lên tiếng đòi tẩy chay khi bị nhắc nhở chỉ
                    được ngồi tại quán trong 60 phút nếu không gọi thêm đồ uống.
                    Vị khách này cho rằng nhân viên quán có thái độ "như đuổi
                    khách" và không nhận được bất kì thông báo nào về việc chỉ
                    được ngồi trong 60 phút từ trước đó. Đây có lẽ là một động
                    thái mang tính rất "cực chẳng đã" của một thương hiệu lớn
                    trong <strong>ngành F&B</strong> Việt sau khi đã gặp phải
                    nhiều trường hợp khách hàng "ngồi lâu". Tuy nhiên, nếu đứng
                    ở vị trí khách hàng, cũng chẳng thể phủ nhận rằng hành động
                    này là vô cùng thiếu tế nhị và gây phản cảm.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/29/a5-1624976235587482387321.jpeg"
                    alt="4, quán cà phê,văn hoá,đi cà phê,văn hoá cà phê,chủ quán,kinh doanh,ngành F&B,"
                    note=""
                  />
                  <p>
                    Highlands Coffee mới đây bị tố chuyện nhân viên có thái độ
                    "đuổi khách" sau 1 tiếng
                  </p>
                  <p>
                    Ở Singapore, có một cửa hàng F&B đã cực kì tinh tế khi treo
                    một tấm bảng thú vị: "Chúng tôi khuyến khích bạn đọc sách,
                    học tập ở đây, nhưng xin hãy nhường chỗ cho những vị khách
                    mới đến nhé!". Sau khi đọc tấm bảng này, chắc hẳn các vị
                    khách dù vô tư hay vô tâm đến mấy cũng phải chú ý đến thời
                    gian của mình.
                  </p>
                  <p>
                    Ở Việt Nam, khi học tập và làm việc tại{" "}
                    <strong>quán cà phê</strong> đang trở thành thói quen và xu
                    hướng của giới trẻ (chỉ cần gõ từ khoá: quán cà phê yên tĩnh
                    để làm việc, Google sẽ trả 5.970.000 kết quả trong 0,66
                    giây) thì khách hàng cũng cần phân biệt rõ, trong rất nhiều
                    các loại hình hàng quán, đâu là nơi phù hợp và đồng thuận để
                    bạn biến nó thành một "văn phòng" hay "góc học tập" của
                    riêng mình.
                  </p>
                  <p>
                    Thực ra, không gian dành riêng cho giới freelancer hay những
                    người cần học tập, làm việc trong thời gian không giới hạn
                    đã được đặt cho một cái tên riêng, đó là Coworking hay
                    Shared-office. Những nơi này được thiết kế đặc biệt để tạo
                    thành một không gian làm việc thoải mái và thuận lợi cho
                    khách hàng, bao gồm ánh sáng, chỗ ngồi, không gian, mạng
                    Internet… Bởi vậy, xin đừng biến{" "}
                    <strong>quán cà phê</strong> thành nơi làm việc và học tập
                    trong thời gian dài quá 2h đồng hồ, bởi bạn không hề biết
                    rằng hành động vô tâm này của mình sẽ khiến{" "}
                    <strong>chủ quán</strong> bị thiệt hại đến thế nào đâu!
                  </p>
                  <p>*Bài viết thể hiện quan điểm của tác giả</p>
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
