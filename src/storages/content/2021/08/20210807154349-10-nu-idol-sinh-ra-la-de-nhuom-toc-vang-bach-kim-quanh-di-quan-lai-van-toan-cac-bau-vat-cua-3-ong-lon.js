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
"timestamp": '07/08/2021 03:43 PM',
"title": '10 nữ idol sinh ra là để nhuộm tóc vàng bạch kim: Quanh đi quẩn lại vẫn toàn các báu vật của 3 "ông lớn"',
"description": 'Visual của các idol Kpop khi để tóc vàng bạch kim đúng là khiến con dân điên đảo vì xuất thần quá mức.',
"src": 'https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/nu-than-toc-vang-rose-blackpink-nay-da-co-doi-thu-2a252b92-1628312258014643678302.jpg',
"alt": 'nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,',
"category": 'stars',
"date": '07/08/2021',
"time": '03:43 PM',
"link": '/10-nu-idol-sinh-ra-la-de-nhuom-toc-vang-bach-kim-quanh-di-quan-lai-van-toan-cac-bau-vat-cua-3-ong-lon',
"zcomponent": 'page_20210807154349',
"filepath": './20210807154349-10-nu-idol-sinh-ra-la-de-nhuom-toc-vang-bach-kim-quanh-di-quan-lai-van-toan-cac-bau-vat-cua-3-ong-lon.js'
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
  '10 nữ idol sinh ra là để nhuộm tóc vàng bạch kim: Quanh đi quẩn lại vẫn toàn các báu vật của 3 "ông lớn"';
const author = "HÀ TRẦN,";
const source = "Doanh nghiệp và Tiếp thị";
const timestamp = "07/08/2021 03:43 PM";
const description =
  "Visual của các idol Kpop khi để tóc vàng bạch kim đúng là khiến con dân điên đảo vì xuất thần quá mức.";
const link =
  "10-nu-idol-sinh-ra-la-de-nhuom-toc-vang-bach-kim-quanh-di-quan-lai-van-toan-cac-bau-vat-cua-3-ong-lon";
const tagparam = [
  "nhuộm tóc",
  "tóc của sao",
  "sao Hàn",
  "idol Kpop",
  "tóc tẩy",
  "mỹ nhân tóc vàng",
  "tóc vàng",
  "idol Hàn",
  "sm entertainment",
  "JYP",
  "YG Entertainment",
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

export default function page_20210807154349() {
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
                      Visual của các <strong>idol Kpop</strong> khi để{" "}
                      <strong>tóc vàng</strong> bạch kim đúng là khiến con dân
                      điên đảo vì xuất thần quá mức.
                    </p>
                    <p>
                      Mùa hè được coi là đại hội đổi màu tóc bởi từ netizen cho
                      đến các idol hạng A đều chuyển sang{" "}
                      <strong>tóc tẩy</strong> sáng màu. Một trong những màu tóc
                      được họ ưa chuộng nhất ắt hẳn chính là vàng bạch kim. Tuy
                      cấp độ màu có thể khác nhau đôi chút nhưng quả thực, màu
                      tóc này khiến các thần tượng xứ kim chi như tỏa sáng lấp
                      lánh dù là dưới nắng hè hay trên sân khấu. Và giờ thì mình
                      cùng điểm lại những mỹ nhân Kpop sinh ra là để nhuộm vàng
                      bạch kim nhé.
                    </p>
                    <h5>Rosé (BLACKPINK)</h5>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/nu-than-toc-vang-rose-blackpink-nay-da-co-doi-thu-2a252b92-1628312258014643678302.jpg"
                      alt="1, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/rose144-0013-1628312322242770189866.jpg"
                      alt="2, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Không cần phải nói nhiều, mái <strong>tóc vàng</strong>{" "}
                      bạch kim của Rosé hẳn đã đi vào huyền thoại. Dù đã thử qua
                      khá nhiều màu tóc: đen, đỏ, nâu, tím, hồng... nhưng đây
                      mới là màu khiến nhan sắc cô nàng thăng hạng hẳn lên.
                      Chẳng thế mà các fan vẫn gọi Rosé bằng biệt danh cô gái 3
                      năm không đổi màu tóc, cũng bởi cô hợp với màu này quá mà.
                    </p>
                    <h5>Lisa (BLACKPINK)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/exde-navoaizmhu-16283123910471377707814.jpg"
                      alt="3, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/2258661523446145939716538954849614768578936n-1628312486571998202148.jpg"
                      alt="4, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Nổi bật không kém Rosé khi để chung 1 màu tóc, ấy chính là
                      Lisa. Để <strong>tóc tẩy</strong> vàng sáng, từng đường
                      nét khuôn mặt của cô hiện lên lung linh như búp bê, vừa
                      xinh đẹp vừa cuốn hút. Vẻ thời thượng, sang chảnh từ trong
                      trứng của "búp bê Thái Lan" cứ thế mà toát lên rực rỡ.
                    </p>
                    <h5>Somi</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/e8kvod7vgaigxgb-16283154347911486329382.jpg"
                      alt="5, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/2337002871863775868581071160874652132506052n-16283154348061033224986.jpg"
                      alt="6, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Thành viên mới nhất gia nhập hội <strong>tóc vàng</strong>{" "}
                      chính là Somi. Bông hồng lai vốn sở hữu khuôn mặt lai Tây
                      chanh sả, nay nhuộm thêm màu tóc vàng bạch kim làm các
                      đường nét trở nên hút hồn hơn hẳn. Cộng thêm lối makeup
                      tông nude thời thượng, visual lần trở lại này của Somi
                      được dân tình khen ngợi không ngớt.
                    </p>
                    <h5>Hyoyeon (SNSD)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/1731829291589913461230285395540403310820605n-16276168348711926385661-16283127260002104093700.jpg"
                      alt="7, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/180158batchhyoyeonxx443588412815849960307667347244358042041205n-15948310619121390793995-16280698878451122748675-16283127260771398899671.jpg"
                      alt="8, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Chọn màu <strong>tóc vàng</strong> cho lần comeback này,
                      ngoài Somi còn có Hyoyeon. Mỹ nhân SNSD được khen tới tấp,
                      nhan sắc cứ thế mà tăng level vùn vụt với màu nhuộm sang
                      chảnh, bắt mắt này. Đây cũng là màu tóc gắn liền với hình
                      ảnh của cô suốt nhiều năm trời và là chìa khóa giúp
                      Hyoyeon "lột xác".
                    </p>
                    <h5>Taeyeon (SNSD)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/top-6-idol-duoc-vi-nhu-tien-tu-voi-mai-toc-vang-rose-van-dinh-nhat-a955a2d6-1628312782709935121846.jpg"
                      alt="9, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/mau-toc-taeyeon-tung-thu-qua-den-da-dinh-nhung-vang-sang-la-nhat-f4ee95-1628312782780298137820.jpg"
                      alt="10, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Nào có kém chị, kém em, Taeyeon tuy tuổi nghề đã cao nhưng
                      khoản bắt trend thì cũng rất ra gì. Chị đây{" "}
                      <strong>nhuộm tóc</strong> vàng từ hồi 2015 rồi cơ nhé.
                      Màu <strong>tóc tẩy</strong> giúp cô nàng vốn đã trẻ nay
                      càng thêm trẻ, lại còn hút mắt, lôi cuốn hơn thấy rõ. Vì
                      quá hợp với <strong>tóc vàng</strong> bạch kim mà nhiều
                      người con tưởng đây là màu tóc nguyên bản của cô nữa cơ
                      mà.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Mina (TWICE)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/ez1r3gfu0aez26-8457-1591608572-16283120395862017470780.jpg"
                      alt="11, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/ez4tawrumaenmh5-4089-1591608571-1628312039651897640628.jpg"
                      alt="12, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Sở hữu gương mặt nhỏ nhắn, các đường nét hài hòa, Mina bên
                      mái <strong>tóc vàng</strong> xinh đẹp, xuất thần đến nỗi
                      được ví như "tiên giáng trần". Nếu như tóc đen khiến Mina
                      trầm tĩnh, bí ẩn, thì đổi sang màu vàng bạch kim, cô nàng
                      tỏa sáng rực rỡ, nhan sắc lúc này đúng là đỉnh cao, khó
                      chê nổi.
                    </p>
                    <h5>Sana (TWICE)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/b0d35bfd-ed7c-4191-bf80-224c178d87d5-1628312849998671010813.jpg"
                      alt="13, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/unnamed-ca844468-1628312850059834290529.jpeg"
                      alt="14, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Đỉnh cao nhan sắc của Sana không lúc nào khác ngoài khoảng
                      thời gian để <strong>tóc vàng</strong>. Với màu tóc này,
                      làn da của nàng idol được tôn lên sáng bật tông, gương mặt
                      nhìn mềm mại, thần thái hơn hẳn.
                    </p>
                    <h5>Dahyun (TWICE)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/202003240920086564-31b5eb07-94d6-427c-8526-6c9c94dfb8c8-16283129188261216125288.jpeg"
                      alt="15, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/1b95301c3ec5ba067877150cae2e5a45-1560945017750976950202-16283129189001864654677.jpg"
                      alt="16, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Bên cạnh Sana và Mina, TWICE còn có 1 thành viên nữa "tiên
                      tử" không kém khi để <strong>tóc vàng</strong>, chính là
                      Dahyun. Nổi tiếng với làn da trắng như phát sáng, visual
                      của cô nàng khi nhuộm màu vàng bạch kim càng nổi bật hơn,
                      khiến các fan ngày nhớ đêm thương.
                    </p>
                    <h5>Wendy (Red Velvet)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/c740cc7cef33d62e908c9c7ade6ffc-7645-7189-1597772097-16283129937171872462961.jpg"
                      alt="17, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/210514723729386221863883133676658689460588249088n-1628313007811851892787.jpg"
                      alt="18, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Rất hiếm khi để tóc sáng màu nhưng để lần nào là chết con
                      dân lần đấy, Wendy <strong>tóc vàng</strong> đỉnh quá đi
                      thôi. Vẫn là kiểu bob layer đặc trưng, nhưng từ tóc đen
                      sang <strong>tóc tẩy</strong>, vẻ ngoài của Wendy đúng
                      thật nâng lên 1 tầm cao mới.
                    </p>
                    <h5>Seulgi (Red Velvet)</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/tinngan0637314213296120-1628313059667585359197.jpg"
                      alt="19, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/8/7/da02adfa-8fee-41bb-a331-cfe6bdafd753-16283130597431777528848.jpg"
                      alt="20, nhuộm tóc,tóc của sao,sao Hàn,idol Kpop,tóc tẩy,mỹ nhân tóc vàng,tóc vàng,idol Hàn,sm entertainment,JYP,YG Entertainment,"
                      note=""
                    />
                    <p>
                      Thành viên cá tính nhất Red Velvet - Seulgi từng để{" "}
                      <strong>tóc vàng</strong> 2 lần: năm 2015 với Ice Cream
                      Cake và 2018 với Really Bad Boy. Lần nào lần đấy, cô nàng
                      đều để lại ấn tượng cực mạnh. Kết hợp với màu{" "}
                      <strong>tóc tẩy</strong>, khuôn mặt sắc sảo của Seulgi nổi
                      bật hẳn lên, khiến khán giả đổ gục vì quá xuất sắc.
                    </p>
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
