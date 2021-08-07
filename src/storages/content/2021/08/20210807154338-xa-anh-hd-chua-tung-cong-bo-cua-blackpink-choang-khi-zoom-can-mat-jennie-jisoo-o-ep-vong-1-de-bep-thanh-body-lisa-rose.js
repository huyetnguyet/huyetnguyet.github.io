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
"title": '"Xả ảnh" HD chưa từng công bố của BLACKPINK: Choáng khi zoom cận mặt Jennie, Jisoo o ép vòng 1 đè bẹp thánh body Lisa - Rosé',
"description": 'Nhan sắc của các thành viên BLACKPINK trong THE ALBUM phiên bản Nhật đã trở thành chủ đề hot trên mạng xã hội.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/e6npqnwxmaisvsn-1628266883930666893959.jpg',
"alt": 'Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,',
"category": 'stars',
"date": '07/08/2021',
"time": '03:43 PM',
"link": '/xa-anh-hd-chua-tung-cong-bo-cua-blackpink-choang-khi-zoom-can-mat-jennie-jisoo-o-ep-vong-1-de-bep-thanh-body-lisa-rose',
"zcomponent": 'page_20210807154338',
"filepath": './20210807154338-xa-anh-hd-chua-tung-cong-bo-cua-blackpink-choang-khi-zoom-can-mat-jennie-jisoo-o-ep-vong-1-de-bep-thanh-body-lisa-rose.js'
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
  '"Xả ảnh" HD chưa từng công bố của BLACKPINK: Choáng khi zoom cận mặt Jennie, Jisoo o ép vòng 1 đè bẹp thánh body Lisa - Rosé';
const author = "HỒNG HẢI,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "07/08/2021 03:43 PM";
const description =
  "Nhan sắc của các thành viên BLACKPINK trong THE ALBUM phiên bản Nhật đã trở thành chủ đề hot trên mạng xã hội.";
const link =
  "xa-anh-hd-chua-tung-cong-bo-cua-blackpink-choang-khi-zoom-can-mat-jennie-jisoo-o-ep-vong-1-de-bep-thanh-body-lisa-rose";
const tagparam = [
  "Blackpink",
  "lisa (blackpink)",
  "Jennie (BlackPink)",
  "rosé (blackpink)",
  "jisoo (blackpink)",
  "jisoo",
  "lisa",
  "jennie",
  "Rosé",
  "sao Hàn",
  "nhan sắc sao Hàn",
  "the album",
  "thánh body",
  "body của sao",
  "mỹ nhân hàn",
  "mỹ nhân kpop",
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

export default function page_20210807154338() {
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
                      Nhan sắc của các thành viên <strong>BLACKPINK</strong>{" "}
                      trong <strong>THE ALBUM</strong> phiên bản Nhật đã trở
                      thành chủ đề hot trên mạng xã hội.
                    </p>
                    <p>
                      Vào ngày 3/8 vừa qua, <strong>BLACKPINK</strong> đã chính
                      thức phát hành <strong>THE ALBUM</strong> phiên bản tiếng
                      Nhật tại xứ sở hoa anh đào. Ngay lập tức, album đã đạt
                      No.1 BXH Daily Album của Oricon ngay ngày đầu ra mắt, đồng
                      thời dẫn đầu BXH Apple Music Japan.
                    </p>{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/e6npqnwxmaisvsn-1628266883930666893959.jpg"
                      alt="13, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <p>
                      Những hình ảnh của 4 thành viên cũng được netizen bàn tán
                      liên tục vì quá xinh đẹp, sang chảnh. Loạt ảnh HD bị rò rỉ
                      từ album càng khiến dân mạng "sốc visual" hàng loạt trước
                      nhan sắc đỉnh cao của <strong>Jennie</strong>,{" "}
                      <strong>Jisoo</strong>, <strong>Rosé</strong> và{" "}
                      <strong>Lisa</strong> ở những khoảnh khắc hiếm có, chưa
                      từng được công bố trước đây.
                    </p>
                    <h5>Jennie</h5>
                    <p>
                      Ảnh cận mặt của <strong>Jennie</strong> khiến netizen "sốc
                      visual" hàng loạt vì đường nét quá xinh đẹp, thần thái của
                      Jennie lại vô cùng sang chảnh và cuốn hút
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23224543743232890043974256738849664464979342n-16282670862201017842189.jpg"
                      alt="14, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/22922561843232884177308172719237181669142256n-16282670862041860357333.jpg"
                      alt="15, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <p>
                      Mái tóc trắng lạ mắt khiến diện mạo của{" "}
                      <strong>Jennie</strong> thêm mới mẻ và cuốn hút. Không cần
                      làm gì nhiều, ở nữ idol vẫn toát lên vẻ sexy sang chảnh
                      "bức người"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23183784643232884710641453162135865277715894n-1628267086031945722827.jpg"
                      alt="16, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <p>
                      <strong>Jennie</strong> tiếp tục tỏa sáng, "chất phát
                      ngất" với kiểu "tóc Dương Quá" từng khiến dân tình điên
                      đảo
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/22756431243232901343973126711022207495728020n-1628267086175273060159.jpg"
                      alt="1, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Khi để tóc mái, Jennie trở nên nữ tính, đáng yêu như búp bê"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23351007543232909843972275586235341415090333n-16282670861401080492237.jpg"
                      alt="2, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Nhưng chỉ cần thay đổi biểu cảm, Jennie đã trở thành búp bê cá tính và cực ngầu"
                    />
                    <h5>Jisoo</h5>
                    <p>
                      Không hổ danh là "Hoa hậu Hàn Quốc", mọi đường nét trên
                      gương mặt <strong>Jisoo</strong> như cằm V-line, sống mũi
                      cao, đôi mắt to có hồn, làn da trắng mịn đều đẹp hoàn hảo
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23331618343232879743975284565486872729769029n-1628267392617888756052.jpg"
                      alt="3, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Chẳng mấy khi hở bạo, chị cả BLACKPINK bỗng sexy bất ngờ với chiếc váy o ép khoe khéo vòng 1 gợi cảm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23245771443232915043971757195370679065386611n-1628267392750530069167.jpg"
                      alt="4, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Giữa rừng hoa, nhan sắc Jisoo càng thêm nổi bật, đẹp như tiên tử"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23224547243232878610642068223966255393792896n-16282673923671924693083.jpg"
                      alt="5, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Thêm 1 lần nữa Jisoo khiến dân tình choáng váng trước ảnh cận cảnh gương mặt đẹp hết chỗ chê"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23237800443232912543972004858441099316850938n-1628267392596153374414.jpg"
                      alt="6, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Ở Jisoo toát ra vẻ vừa nữ tính ngọt ngào, lại vừa cá tính sang chảnh"
                    />{" "}
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23166584143232881977308391611028897779770700n-16282673925711215278428.jpg"
                      alt="17, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <RelationNewsInPage category={category} />
                    <h5>Rosé</h5>
                    <p>
                      "Đóa hồng nước Úc" <strong>Rosé</strong> khiến fan ngất
                      ngây trước gương mặt đẹp đỉnh cao, thần thái quyến rũ với
                      mái tóc hồng ngọt ngào
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23267375543232905177306072335893104239296802n-1628267527550140169564.jpg"
                      alt="7, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Trong trang phục tennis, Rosé vừa năng động lại vừa gợi cảm"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/22590370043232906143972644962515325063949267n-16282675270391653472564.jpg"
                      alt="8, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Ánh mắt quyến rũ của Rosé khiến fan không thể rời mắt ngắm nhìn"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23182130543232904343972825081349983533327753n-1628267527052916629969.jpg"
                      alt="18, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <p>
                      Từ thành viên bị chê nhạt nhòa, giọng ca chính của "Hắc
                      Hường" ngày càng lột xác, lên hương nhan sắc thấy rõ
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23261434143232885577308034438694466930571209n-1628267527199559959758.jpg"
                      alt="9, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Từ thần thái, biểu cảm gương mặt cho đến body đỉnh cao, càng ngày Rosé càng xinh đẹp lên rất nhiều so với thời mới debut"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/2317073404323290351063957961097875775684263n-1628267527534975296592.jpg"
                      alt="10, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <h5>Lisa</h5>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23213043043232879443975317253262240047365070n-16282676632081519856593.jpg"
                      alt="11, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Không chỉ cá tính ngầu lòi, Lisa còn có thể mong manh dịu dàng như thế này"
                    />
                    <p>
                      Trong ảnh này, mái tóc đỏ nổi bật và ánh mắt sắc như "cứa
                      vào tim fan"
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/2261923874323291437730515761526141929417499n-16282676630641906235015.jpg"
                      alt="12, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note="Trong trang phục tennis, Lisa để tóc xanh, khoe khéo được bờ vai vuông góc cực phẩm, chân tay thanh mảnh bao cô gái mơ ước"
                    />
                    <p>
                      Chiếc đầm ngắn ôm sát đã tôn lên trọn vẹn body đỉnh cao
                      của "<strong>thánh body</strong>" BLACKPINK
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23177880343232902910639634249103981746085701n-16282676630822082012857.jpg"
                      alt="19, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23174082543232907143972542389108132467149641n-16282676628351823488239.jpg"
                      alt="20, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/6/23228895343232907610639167174412838883103327n-16282676626781572223774.jpg"
                      alt="21, Blackpink,lisa (blackpink),Jennie (BlackPink),rosé (blackpink),jisoo (blackpink),jisoo,lisa,jennie,Rosé,sao Hàn,nhan sắc sao Hàn,the album,thánh body,body của sao,mỹ nhân hàn,mỹ nhân kpop,"
                      note=""
                    />
                    <p>Nguồn: Twitter</p>
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
