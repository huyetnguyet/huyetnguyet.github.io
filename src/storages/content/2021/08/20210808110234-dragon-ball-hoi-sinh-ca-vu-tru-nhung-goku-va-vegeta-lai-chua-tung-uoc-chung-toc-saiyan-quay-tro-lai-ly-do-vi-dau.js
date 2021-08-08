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
"timestamp": '08/08/2021 11:02 AM',
"title": 'Dragon Ball: Hồi sinh cả vũ trụ nhưng Goku và Vegeta lại chưa từng ước chủng tộc Saiyan quay trở lại, lý do vì đâu?',
"description": 'Nhờ sức mạnh của Rồng thần không ít lần một người chết hay một hành tinh nào đó được hồi sinh quay trở lại.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/8/anh-1-16284058255101769228073.jpg',
"alt": 'DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,HÀNH TINH SAIYAN,GOKU,VEGETA,HỒI SINH NGƯỜI CHẾT,',
"category": 'games',
"date": '08/08/2021',
"time": '11:02 AM',
"link": '/dragon-ball-hoi-sinh-ca-vu-tru-nhung-goku-va-vegeta-lai-chua-tung-uoc-chung-toc-saiyan-quay-tro-lai-ly-do-vi-dau',
"zcomponent": 'page_20210808110234',
"filepath": './20210808110234-dragon-ball-hoi-sinh-ca-vu-tru-nhung-goku-va-vegeta-lai-chua-tung-uoc-chung-toc-saiyan-quay-tro-lai-ly-do-vi-dau.js'
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
  "Dragon Ball: Hồi sinh cả vũ trụ nhưng Goku và Vegeta lại chưa từng ước chủng tộc Saiyan quay trở lại, lý do vì đâu?";
const author = "SuSu";
const source = "Trí Thức Trẻ";
const timestamp = "08/08/2021 11:02 AM";
const description =
  "Nhờ sức mạnh của Rồng thần không ít lần một người chết hay một hành tinh nào đó được hồi sinh quay trở lại.";
const link =
  "dragon-ball-hoi-sinh-ca-vu-tru-nhung-goku-va-vegeta-lai-chua-tung-uoc-chung-toc-saiyan-quay-tro-lai-ly-do-vi-dau";
const tagparam = [
  "DRAGON BALL",
  "7 VIÊN NGỌC RỒNG",
  "RỒNG THẦN",
  "HÀNH TINH SAIYAN",
  "GOKU",
  "VEGETA",
  "HỒI SINH NGƯỜI CHẾT",
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

export default function page_20210808110234() {
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
                      <strong>Dragon Ball</strong> là bộ truyện nổi tiếng của
                      Akira Toriyama, xoay quanh việc dùng các viên ngọc rồng để
                      triệu hồi <strong>Rồng thần</strong> thực hiện các điều
                      ước. Một trong những điều ước lớn lao nhất chính là{" "}
                      <strong>hồi sinh người chết</strong> hoặc khôi phục lại vũ
                      trụ. Trong khi các viên ngọc rồng siêu cấp có khả năng
                      khôi phục đa vũ trụ, thì ngay cả rồng của Trái đất là
                      Shenron cũng có thể hồi sinh hàng tỷ người - như chúng ta
                      đã thấy khi nó khôi phục hành tinh khỏi sự tàn phá của
                      Majin Buu.
                    </p>
                    <p>
                      Với quyền năng của mình các <strong>Rồng thần</strong> đã
                      không ít lần thực hiện điều này, tuy có nhiều điều ước
                      chưa được thực hiện thế nhưng có nhiều người tự hỏi tại
                      sao <strong>Goku</strong> và <strong>Vegeta</strong> chưa
                      bao giờ sử dụng các viên ngọc rồng để hồi sinh chủng tộc
                      Saiyan sau khi họ bị Frieza xóa sổ. Lý do vì đâu?
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/anh-1-16284058255101769228073.jpg"
                      alt="1, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,HÀNH TINH SAIYAN,GOKU,VEGETA,HỒI SINH NGƯỜI CHẾT,"
                      note=""
                    />
                    <p>
                      Như chúng ta đã biết đến Trái đất khi còn là một đứa trẻ
                      và mất đi ký ức của người Saiyan thì <strong>Goku</strong>{" "}
                      đã không còn nhớ gì về nguồn gốc của mình. Lần đầu tiên
                      Goku tiếp xúc với văn hóa Saiyan là nhờ sự xuất hiện của
                      người anh trai Raditz đã mất từ lâu, người ban đầu tỏ ra
                      là một nhân vật phản diện đáng gờm, dẫn đến cái chết đầu
                      tiên của Goku. Bất chấp lần giới thiệu tồi tệ này, Goku
                      cũng đã hình thành cảm giác tự hào của riêng mình đối với
                      chủng tộc Saiyan của mình, đặc biệt là khi anh có cơ hội
                      trả thù cho họ bằng cách đối đầu với Frieza.
                    </p>
                    <p>
                      Tuy nhiên <strong>Goku</strong> lại không nghĩ đến việc
                      hồi sinh <strong>hành tinh Saiyan</strong> mà thay vào đó
                      đã bày tỏ với <strong>Vegeta</strong> rằng hai người họ có
                      thể gạt bỏ sự ganh đua nhỏ của mình để hình thành một
                      chủng tộc mới là sự kết hợp những yếu tố tốt nhất của loài
                      người và Saiyan thông qua những đứa con của họ. Như lần
                      Goku thuyết phục Vegeta sử dụng bông tai Potara để hợp
                      nhất thành chiến binh Vegito để chiến đấu với Majin Buu.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/anh-2-16284058255291041015344.jpg"
                      alt="2, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,HÀNH TINH SAIYAN,GOKU,VEGETA,HỒI SINH NGƯỜI CHẾT,"
                      note=""
                    />
                    <p>
                      Tương tự như vậy, ngay cả bản thân <strong>Vegeta</strong>{" "}
                      cũng chưa bao giờ thể hiện sự quan tâm rõ ràng đến việc
                      hồi sinh chủng tộc của mình. Ban đầu tìm kiếm các viên
                      ngọc rồng để đạt được sự bất tử cho bản thân thay vì đưa
                      bất kỳ người thân nào trở về từ cõi chết. Giống như{" "}
                      <strong>Goku</strong> thì Vegeta không có nhiều kí ức về
                      hành tinh của mình khi quê hương và chủng tộc của anh đã
                      bị xóa sổ khi còn nhỏ. Không những thế mục đích duy nhất
                      của Vegeta là muốn bản thân trở nên mạnh mẽ để đi chinh
                      phục các hành tinh khác.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Điều này có thể giải thích là do Saiyan là một chủng tộc
                      chiến binh, họ coi thất bại là một sự sỉ nhục sâu sắc.
                      Chính vì thế <strong>Vegeta</strong> có thể cảm thấy rằng
                      những người anh em đã chết của mình không xứng đáng để hồi
                      sinh, như việc anh hoàn toàn loại bỏ khả năng hồi sinh
                      Raditz bằng các viên ngọc rồng khi Nappa đề nghị như vậy.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/anh-3-16284058255481709375383.jpg"
                      alt="3, DRAGON BALL,7 VIÊN NGỌC RỒNG,RỒNG THẦN,HÀNH TINH SAIYAN,GOKU,VEGETA,HỒI SINH NGƯỜI CHẾT,"
                      note=""
                    />
                    <p>
                      Có thể thấy hiện tại chủng tộc Saiyan đã chết và biến mất
                      hoàn toàn khỏi vũ trụ. Và cho đến nay cũng không có dấu
                      hiệu nào cho sự quay trở lại của họ. May mắn thay, một
                      biến thể của người Saiyan chính là sự kết hợp với người
                      Trái Đất đang được hình thành và có lẽ đây là một điều tốt
                      đẹp hơn là dùng sức mạnh của <strong>Rồng thần</strong> để
                      hồi sinh họ.
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
