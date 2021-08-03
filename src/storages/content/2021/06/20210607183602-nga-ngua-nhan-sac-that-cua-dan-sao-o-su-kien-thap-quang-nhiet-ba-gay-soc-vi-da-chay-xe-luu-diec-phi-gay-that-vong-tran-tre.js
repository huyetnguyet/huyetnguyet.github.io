import React from "react";
import "components/page.scss";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature, RelationNews } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 07/06/2021 06:36 PM",
"title": Ngã ngửa nhan sắc thật của dàn sao ở sự kiện Thập Quang: Nhiệt Ba gây sốc vì da chảy xệ, Lưu Diệc Phi gây thất vọng tràn trề",
"description": Xuất hiện lộng lẫy tại sự kiện Thập Quang Thịnh Điển ngày 7/6, dàn sao Hoa ngữ như Địch Lệ Nhiệt Ba, Dương Mịch, Lưu Diệc Phi, Ngô Lỗi, Trần Hiểu,... bị dân tình soi nhan sắc nhiệt tình.",
"src": ",
"alt": Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, ",
"category": news",
"date": 07/06/2021",
"time": 06:36 PM",
"link": "/nga-ngua-nhan-sac-that-cua-dan-sao-o-su-kien-thap-quang-nhiet-ba-gay-soc-vi-da-chay-xe-luu-diec-phi-gay-that-vong-tran-tre",
"zcomponent": page_20210607183602",
"filepath": ./20210607183602-nga-ngua-nhan-sac-that-cua-dan-sao-o-su-kien-thap-quang-nhiet-ba-gay-soc-vi-da-chay-xe-luu-diec-phi-gay-that-vong-tran-tre.js"
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
  "Ngã ngửa nhan sắc thật của dàn sao ở sự kiện Thập Quang: Nhiệt Ba gây sốc vì da chảy xệ, Lưu Diệc Phi gây thất vọng tràn trề";
const author = "NHÃ AN,";
const source = "Trí Thức Trẻ";
const timestamp = "07/06/2021 06:36 PM";
const description =
  "Xuất hiện lộng lẫy tại sự kiện Thập Quang Thịnh Điển ngày 7/6, dàn sao Hoa ngữ như Địch Lệ Nhiệt Ba, Dương Mịch, Lưu Diệc Phi, Ngô Lỗi, Trần Hiểu,... bị dân tình soi nhan sắc nhiệt tình.";
const link =
  "nga-ngua-nhan-sac-that-cua-dan-sao-o-su-kien-thap-quang-nhiet-ba-gay-soc-vi-da-chay-xe-luu-diec-phi-gay-that-vong-tran-tre";
const tagparam = [
  "dich-le-nhiet-ba",
  "luu-diec-phi",
  "ngo-loi",
  "la-tan",
  "truong-vu-ky",
  "tran-hieu",
  "tieu-chien",
  "phan-viet-minh",
  "truong-hue-van",
  "bach-bach-ha",
  "sao-hoa-ngu",
  "my-nhan-hoa-ngu",
  "nhan-sac-my-nhan-hoa-ngu",
  "mao-hieu-dong",
  "duong-mich",
  "boc-tran-nhan-sac-cua-sao",
  "nhan-sac-that-cua-sao",
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

export default function page_20210607183602() {
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
                      Sự kiện Thập Quang Đại Thưởng diễn ra sáng ngày 7/6 khiến
                      người hâm mộ choáng ngợp bởi dàn sao khủng tham dự. Rất
                      nhiều khoảnh khắc ấn tượng của các nghệ sĩ được truyền tay
                      nhau chia sẻ, có thể thấy nhan sắc, vóc dáng của dàn sao
                      luôn được quan tâm, chú ý.
                    </p>
                    <p>
                      Tuy nhiên, ngoài những khung hình lung linh, được chỉnh
                      sửa kỹ càng trên sân khấu, giờ đây 1 chủ đề mà các fan
                      quan tâm chính là nhan sắc thực của các ngôi sao khi bị
                      ống kính máy quay soi dần. Trái ngược với những tấm ảnh
                      hoàn hảo tới từng milimet, visual minh tinh xứ Trung khiến
                      netizen "ngã ngửa".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230809033491200221986.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230610340821359913979.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606910901985958874.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note="Địch Lệ Nhiệt Ba bị nhận xét là mỹ nhân có tốc độ lão hoá nhan sắc nhanh nhất so với dàn người mỹ nhân. Làn da nhăn nheo, chảy xệ, xuất hiện nhiều nếp nhăn của người đẹp khiến không ít fan thất vọng"
                    />
                    <p>
                      Không ai có thể tin nổi Nhiệt Ba mới 29 tuổi nhưng visual
                      đã "xuống cấp" nhường này
                    </p>
                    <p>
                      Có thể nói, nàng "Mỹ nhân Tân Cương" gây thất vọng với
                      hình ảnh kém xinh
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-1623061473587678019572.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note="Dương Mịch lại gây sốt với hình ảnh chỉn chu, hoàn hảo, nhan sắc lộng lẫy dường như không có bất cứ điểm trừ nào"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230614882081864454246.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note="Phần da nhăn nheo quanh vùng miệng trước đây không còn rõ rệt như trước"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606136902039348331.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606210961878150698.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note="Tuy nhiên, gây thất vọng nhất dàn sao chính là Lưu Diệc Phi. Tạo hình già chát như bà thím của nữ diễn viên khiến nhiều fan ngán ngẩm"
                    />
                    <p>
                      Không chỉ vậy, các fan còn soi ra phần da cổ già nua,
                      nhiều nếp nhăn, càng cộng thêm độ "dừ" cho người đẹp
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606072671411814891.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note="Mái tóc chính là điểm trừ lớn nhất của Lưu Diệc Phi"
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-1623060964577123645025.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230609777451386664482.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/photo-1-16230610706371833387590.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
                    <p>
                      Mao Hiểu Đồng điệu đà gắn đá lên phần ngực và xương quai
                      xanh, ai ngờ bị trang QQ chê bai là "lem nhem", "mất thẩm
                      mỹ". Nhan sắc của cô nàng cũng lộ dấu hiệu lão hoá rõ ràng
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-1623060803218350579826.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note="Xuất hiện trong sự kiện này, Trương Huệ Văn hoàn toàn chìm nghỉm vì hình ảnh nhạt nhoà"
                    />
                    <p>
                      Sau những màn "hack tuổi" thần sầu, Trương Vũ Kỳ rõ ràng
                      đánh mất phong độ, dần dần lộ khiếm khuyết nhan sắc. Không
                      khó để nhận ra nữ diễn viên có quá nhiều nếp nhăn quanh
                      vùng miệng, khi cười sẽ lộ hết nếp nhăn
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-1623060987067602310237.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
                    <p>
                      Ảnh hậu đình đám vốn nổi tiếng với gương mặt trẻ trung giờ
                      đây cũng đã có dấu hiệu xuống sắc
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606650351071017388.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606815721396909683.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230609987561364151757.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-162306075238125704212.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606300261451058636.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606424351235514447.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note="Gương mặt Ngô Lỗi hốc hác, xuất hiện nhiều nếp nhăn, được cái đường nét cực phẩm bù lại chút đỉnh"
                    />
                    <p>Nguồn: Weibo, QQ, iFeng</p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/6/7/-16230606484691286640838.jpg"
                      alt="Dich Le Nhiet Ba, Luu Diec Phi, Ngo Loi, La Tan, Truong Vu Ky, Tran Hieu, Tieu Chien, Phan Viet Minh, Truong Hue Van, Bach Bach Ha, Sao Hoa Ngu, My Nhan Hoa Ngu, Nhan Sac My Nhan Hoa Ngu, Mao Hieu Dong, Duong Mich, Boc Tran Nhan Sac Cua Sao, Nhan Sac That Cua Sao, "
                      note=""
                    />
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
