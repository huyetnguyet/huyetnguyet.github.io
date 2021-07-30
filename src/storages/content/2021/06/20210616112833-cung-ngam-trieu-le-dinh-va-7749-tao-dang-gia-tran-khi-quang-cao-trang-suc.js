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
"timestamp": '16/06/2021 11:28 AM',
"title": 'Cùng ngắm Triệu Lệ Dĩnh và 7749 tạo dáng "giả trân" khi quảng cáo trang sức',
"description": 'Là quảng cáo trang sức hạng sang hay trang sức đồ chơi đây thưa cô Triệu Lệ Dĩnh?',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210616112833--10-651324.jpg',
"alt": 'Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, ',
"category": 'stars',
"date": '16/06/2021',
"time": '11:28 AM',
"link": '/cung-ngam-trieu-le-dinh-va-7749-tao-dang-gia-tran-khi-quang-cao-trang-suc',
"zcomponent": 'page_20210616112833',
"filepath": './20210616112833-cung-ngam-trieu-le-dinh-va-7749-tao-dang-gia-tran-khi-quang-cao-trang-suc.js'
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
  'Cùng ngắm Triệu Lệ Dĩnh và 7749 tạo dáng "giả trân" khi quảng cáo trang sức';
const author = "TWUS,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "16/06/2021 11:28 AM";
const description =
  "Là quảng cáo trang sức hạng sang hay trang sức đồ chơi đây thưa cô Triệu Lệ Dĩnh?";
const link =
  "cung-ngam-trieu-le-dinh-va-7749-tao-dang-gia-tran-khi-quang-cao-trang-suc";
const tagparam = [
  "trieu-le-dinh",
  "trieu-lo-tu",
  "nayeon",
  "dep",
  "star-style",
  "style-cua-sao",
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

export default function page_20210616112833() {
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
                    Quảng cáo trang sức cũng là 1 trong những thước đo thần thái
                    của các ngôi sao mà không phải ai cũng có thể vượt qua được.
                    Để quảng bá trang sức, người diện phải vừa cân bằng giữa
                    thần thái của bản thân lẫn lối pose dáng để có được hình ảnh
                    ưng mắt, tôn lên món trang sức mà họ quảng bá.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--10-651324.jpg")
                        .default
                    }
                    alt="1Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--11-943030.jpg")
                        .default
                    }
                    alt="2Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Tuy nhiên không phải ai cũng làm được điều này, điển hình là
                    loạt tạo dáng với nhiều phần hạn chế của Triệu Lệ Dĩnh.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--12-878252.jpg")
                        .default
                    }
                    alt="3Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Tham dự sự kiện của thương hiệu Longines, Triệu Lệ Dĩnh hết
                    sức có tâm khi tạo đủ 7749 tư thế để quảng bá cho chiếc đồng
                    hồ của hãng. Tuy lối tạo dáng của cô giúp chiếc đồng hồ được
                    tôn hết cỡ nhưng lại có phần "giả trân", thiếu tự nhiên.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--13-785382.jpg")
                        .default
                    }
                    alt="4Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Khi diện những món trang sức đắt đỏ, người đẹp họ Triệu luôn
                    tận dụng mọi tư thế để có thể tôn lên những món phụ kiện
                    này. Cách tạo dáng hết sức có tâm của cô giúp mọi món trang
                    sức đều được "lên sóng", phô diễn tối đa trước ống kính. Khi
                    thì giơ cao tay, khi lại đưa nhẫn lên che mắt.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--14-492797.jpg")
                        .default
                    }
                    alt="5Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Đôi khi sáng tạo hơn chút đỉnh thì cô có thể giơ tay hờ hững
                    hoặc vắt nhẹ qua trán. Cô nàng thậm chí còn cố tình lật
                    ngược mặt nhẫn để tôn lên tối đa món phụ kiện này.
                  </p>
                  <RelationNewsInPage category={category} />
                  <p>
                    Triệu Lệ Dĩnh thậm chí còn quảng bá trang sức có tâm đến mức
                    kể cả với tạo hình khi đang tắm, đầu đang buộc khăn tắm
                    nhưng vẫn đeo trang sức dày cộp, lạc quẻ.
                  </p>{" "}
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--15-814977.jpg")
                        .default
                    }
                    alt="6Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Đang là nữ diễn viên nổi tiếng, Triệu Lệ Dĩnh cũng vô cùng
                    đắt sô quảng cáo, cô là gương mặt được nhiều thương hiệu
                    trang sức lớn yêu thích. Phải chăng gu của các nhãn hàng
                    trang sức là tìm 1 mỹ nhân tạo dáng hết mình, chẳng mấy khi
                    tiết chế?
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--16-293745.jpg")
                        .default
                    }
                    alt="7Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>
                    Một trong số ít những lần tạo dáng tiết chế bên trang sức
                    của "Dĩnh tỷ"
                  </p>
                  <p>
                    Mỹ nhân họ Triệu luôn tận dụng tối đa cơ hội để phô diễn cho
                    những mẫu trang sức mà cô quảng bá, khiến cho nhiều dân mạng
                    cảm thấy thật thú vị trước ngôn ngữ cơ thể của nữ nhân này!
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--17-300080.jpg")
                        .default
                    }
                    alt="8Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--18-997686.jpg")
                        .default
                    }
                    alt="9Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--19-909595.jpg")
                        .default
                    }
                    alt="10Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--20-498096.jpg")
                        .default
                    }
                    alt="11Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--21-636123.jpg")
                        .default
                    }
                    alt="12Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--22-927819.jpg")
                        .default
                    }
                    alt="13Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616112833--23-927819.jpg")
                        .default
                    }
                    alt="14Trieu Le Dinh, Trieu Lo Tu, Nayeon, Dep, Star Style, Style Cua Sao, "
                    note=""
                  />
                  <p>Ảnh: Internet</p>
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
