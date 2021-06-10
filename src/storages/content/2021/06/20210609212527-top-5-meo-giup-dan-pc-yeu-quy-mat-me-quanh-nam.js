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
"timestamp": '09/06/2021 09:25 PM',
"title": 'Top 5 mẹo giúp dàn PC yêu quý mát mẻ quanh năm',
"description": 'Nếu một ngày đẹp trời bạn thấy PC mình quá nóng thì đây sẽ là vài viết bạn nên đọc. Hy vọng nó cho bạn vài mẹo để giữ gìn chiếc PC yêu quý.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-1623254349277489354549.jpg',
"alt": 'Meo, Thu Thuat, Dan Pc, Cong Dong Mang, Tin Tuc Game, ',
"category": 'games',
"date": '09/06/2021',
"time": '09:25 PM',
"link": '/top-5-meo-giup-dan-pc-yeu-quy-mat-me-quanh-nam',
"zcomponent": 'page_20210609212527',
"filepath": './20210609212527-top-5-meo-giup-dan-pc-yeu-quy-mat-me-quanh-nam.js'
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
const title = "Top 5 mẹo giúp dàn PC yêu quý mát mẻ quanh năm";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "09/06/2021 09:25 PM";
const description =
  "Nếu một ngày đẹp trời bạn thấy PC mình quá nóng thì đây sẽ là vài viết bạn nên đọc. Hy vọng nó cho bạn vài mẹo để giữ gìn chiếc PC yêu quý.";
const link = "top-5-meo-giup-dan-pc-yeu-quy-mat-me-quanh-nam";
const tagparam = [
  "meo",
  "thu-thuat",
  "dan-pc",
  "cong-dong-mang",
  "tin-tuc-game",
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

export default function page_20210609212527() {
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
              >
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
                    Nhiệt độ là nỗi ám ảnh quanh năm đối với dân chơi PC, nhất
                    là trong những ngày hè oi ả. Mặc dù PC hiện đại rất khó
                    "chết" do quá nhiệt nhưng giảm tuổi thọ linh kiện, tụt xung
                    hay giảm hiệu năng thì vẫn có.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Vì vậy, mời anh em đọc 5 mẹo chống nóng giúp PC của bạn luôn
                    mát mẻ quanh năm.
                  </p>
                  <h4>Vệ sinh những bộ phận liên quan đến nhiệt và khí</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-1623254349277489354549.jpg"
                    alt="Meo, Thu Thuat, Dan Pc, Cong Dong Mang, Tin Tuc Game, "
                    note=""
                  />
                  <p>
                    Bạn có bao giờ vệ sinh một cái quạt máy xong rồi phải bất
                    ngờ vì độ mát sau vệ sinh chưa? PC nó cũng vậy. Những bộ
                    phận liên quan đến nhiệt và khí như quạt, thông khí, quạt
                    trên tản, màng lọc gió, các lá heatsink… khi bị bám bụi
                    nhiều sẽ giảm hiệu năng rất đáng kể. Chính vì thế mà bạn cần
                    đảm bảo chúng sạch sẽ để cho hiệu năng tốt nhất để làm mát
                    cho PC. Một dàn PC sau khi vệ sinh bộ tản nhiệt, dàn quạt và
                    màng lọc khí thôi thì CPU hạ được cả chục độ là chuyện bình
                    thường đấy.
                  </p>
                  <p>
                    Nếu bạn siêng hơn thì có thể bung luôn dàn PC ra vệ sinh
                    từng món. Còn bạn nào lười thì cứ như mình, tập trung vệ
                    sinh các lá tản nhiệt trên bộ tản (cả CPU và GPU), tất cả
                    quạt trong PC và màng lọc bụi (nếu có) là được. Tuy không
                    cao siêu nhưng đây là một trong những mẹo chống nóng cho PC
                    hiệu quả nhất và tỉ lệ thành côn cao nhất đấy nhé.
                  </p>
                  <h4>Thay keo tản nhiệt</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-1-16232543508201900158494.jpg"
                    alt="Meo, Thu Thuat, Dan Pc, Cong Dong Mang, Tin Tuc Game, "
                    note=""
                  />
                  <p>
                    Toàn bộ nhiệt từ CPU ra tản đều được truyền qua lớp keo tản
                    nhiệt như một cầu nối trung gian. Thế nên tình trạng của lớp
                    keo tản nhiệt rất quan trọng. Nếu thấy máy nóng thì bạn có
                    thể thử thay keo tản nhiệt xem sao. Khi keo bị khô thì chỉ
                    cần bạn thay keo mới là nhiệt CPU sẽ được cải thiện đáng kể
                    đấy.
                  </p>
                  <p>
                    Ngoài ra nếu tự tin vào trình độ của mình thì bạn có thể
                    nghĩ đến keo tản nhiệt kim loại lỏng, cho hiệu suất dẫn
                    nhiệt rất bá đạo so với keo tản nhiệt thường. Tuy nhiên mấy
                    bạn nhớ là hết sức cẩn thận vì keo tản nhiệt kim loại lỏng
                    chỉ dành cho dân chuyên mà thôi.
                  </p>
                  <p>
                    Thêm một lưu ý nhỏ là mấy bạn khi gắn tản nhớ bắt ốc kỹ một
                    chút, tránh trường hợp tản bị kênh lên, không áp thẳng xuống
                    CPU, lúc đó thì keo xịn cũng bằng thừa. GPU thì nếu còn bảo
                    hành thì khuyến cáo mấy bạn không nên động vào. Thứ nhất là
                    vì sẽ mất bảo hành, còn thứ 2 là vì hãng họ đã tính cả rồi,
                    còn bảo hành là còn xài được, khi nào nó quá nhiệt thì bạn
                    đem đi bảo hành luôn chứ đừng tự xử nhé.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-2-1623254352320105773763.jpg"
                    alt="Meo, Thu Thuat, Dan Pc, Cong Dong Mang, Tin Tuc Game, "
                    note=""
                  />
                  <p>
                    Phần cứng chạy càng nhiều thì sẽ càng nóng máy. Nếu lâu rồi
                    bạn không để ý xem có bao nhiêu phần mềm chạy ẩn trong máy
                    nhé. Hồi trước mình hay cài bậy bạ, mỗi lần dọn mớ phần mềm
                    rác là máy lại mát hơn đến vài ba độ đấy. Hoặc nếu bạn không
                    rành mấy vụ lục phần mềm này thì có thể cài lại Windows luôn
                    cho đảm bảo.
                  </p>
                  <h4>Undervolt (hạ điện áp)</h4>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-3-1623254351823705778801.jpg"
                    alt="Meo, Thu Thuat, Dan Pc, Cong Dong Mang, Tin Tuc Game, "
                    note="
                    *Lưu ý, thủ thuật này tuy rất hiệu quả nhưng chỉ dành cho
                    dân chuyên"
                  />
                  <p>
                    Nếu như bạn đã bày đủ bùa phép mà PC vẫn không hạ nhiệt đáng
                    kể thì Undervolt sẽ là một giải pháp hay, có thể giúp CPU,
                    GPU của bạn hạ đến 5-10 độ một cách dễ dàng. Về cơ bản thì
                    đây là một thủ thuật giảm điện thế, giảm lượng điện của chip
                    để giảm mức nhiệt độ tỏa ra. Nếu làm đúng thì nó chẳng những
                    không giảm hiệu năng mà còn giúp CPU, GPU của bạn mát hơn
                    rất nhiều nữa.
                  </p>
                  <p>
                    Chênh lệch nhiệt độ càng lớn thì truyền nhiệt càng nhanh,
                    suy ra nhiệt độ môi trường càng thấp thì nhiệt từ chip
                    truyền ra ngoài thông qua bộ tản nhiệt càng hiệu quả. Nói
                    cho dễ hiểu tức là phòng bạn mà mát thì PC cũng mát theo.
                  </p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/9/photo-4-1623254351341664023498.jpg"
                    alt="Meo, Thu Thuat, Dan Pc, Cong Dong Mang, Tin Tuc Game, "
                    note=""
                  />
                  <p>
                    Đó chính là lý do khiến việc lắp máy lạnh sẽ giúp bạn bạn hạ
                    nhiệt cho dàn PC một cách dễ dàng, cho bạn chiến game xả
                    láng mà không lo về nhiệt. Ngoài tác dụng làm mát ra thì
                    nhiều mẫu máy lạnh còn có chức năng hút ẩm, giúp PC của bạn
                    lúc nào cũng khô thoáng. Về lâu dài cũng có thể kéo dài tuổi
                    thọ linh kiện và xác suất xách nó đi bảo hành nữa đấy.
                  </p>
                  <p>Theo GVN360</p>
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
