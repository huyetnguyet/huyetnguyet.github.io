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
"timestamp": '19/08/2021 01:00 PM',
"title": 'Cách build tối ưu của Yoimiya: Nhân vật gây tranh cãi trong cộng đồng Genshin Impact',
"description": 'Gác lại những tranh cãi trong cộng đồng Genshin Impact, nhân vật Yoimiya có ưu điểm gì và nên được build như thế nào?',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/genshin-impact-cach-build-yoimiya-2-16292529626951351367237.jpg',
"alt": 'GENSHIN IMPACT,GAME,KHÁM PHÁ,',
"category": 'games',
"date": '19/08/2021',
"time": '01:00 PM',
"link": '/cach-build-toi-uu-cua-yoimiya-nhan-vat-gay-tranh-cai-trong-cong-dong-genshin-impact',
"zcomponent": 'page_20210819130010',
"filepath": './20210819130010-cach-build-toi-uu-cua-yoimiya-nhan-vat-gay-tranh-cai-trong-cong-dong-genshin-impact.js'
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
  "Cách build tối ưu của Yoimiya: Nhân vật gây tranh cãi trong cộng đồng Genshin Impact";
const author = "Jessie Mai";
const source = "Trí Thức Trẻ";
const timestamp = "19/08/2021 01:00 PM";
const description =
  "Gác lại những tranh cãi trong cộng đồng Genshin Impact, nhân vật Yoimiya có ưu điểm gì và nên được build như thế nào?";
const link =
  "cach-build-toi-uu-cua-yoimiya-nhan-vat-gay-tranh-cai-trong-cong-dong-genshin-impact";
const tagparam = ["GENSHIN IMPACT", "GAME", "KHÁM PHÁ"];
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

export default function page_20210819130010() {
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
                      Yoimiya là nhân vật 5 sao mới nhất xuất hiện trong banner
                      gacha của <strong>Genshin Impact</strong>. Ngay từ khi mới
                      ra mắt, nhân vật này đã gây ra vô số tranh cãi vì bộ skill
                      của mình. Dù đã có rất nhiều nhân vật hệ hỏa đóng vai trò
                      DPS trong Genshin Impact, Yoimiya vẫn có sức hấp dẫn riêng
                      nhờ lối chơi thú vị và ngoại hình cuốn hút.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/genshin-impact-cach-build-yoimiya-2-16292529626951351367237.jpg"
                      alt="1, GENSHIN IMPACT,GAME,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Vậy Yomiya có phải là một nhân vật 5 sao đáng sở hữu
                      không, và nếu đã có hoặc muốn có nhân vật này, bạn cần
                      chuẩn bị những gì để Yoimiya có thể trở nên hữu ích với
                      đội hình của mình?
                    </p>
                    <h5>Kỹ năng (Skill)</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/genshin-impact-yoimiya-story-quest-guide-carassus-auratus-chapter-act-i-feat-2-1629253110495389205511.jpg"
                      alt="2, GENSHIN IMPACT,GAME,KHÁM PHÁ,"
                      note=""
                    />
                    <p>
                      Bộ kỹ năng của Yoimiya có nhiều khác biệt so với các nhân
                      vật hệ Hỏa và cung thủ khác. Người chơi Yoimiya sẽ phải
                      tập trung vào nâng kỹ năng tấn công thường và kỹ năng
                      nguyên tố của nhân vật; vì đây là những nguồn sát thương
                      chính của Yoimiya.
                    </p>
                    <p>Tấn công thường: Liên tục bắn 5 mũi tên</p>
                    <p>
                      Trọng kích: Ngắm bắn gây sát thương cao. Thời gian tụ lực
                      sẽ cộng dồn: tụ lực lần 1 bắn ra mũi tên gây sát thương
                      Hỏa, tụ lực lần 2 sinh ra thêm tối đa 3 mũi tên truy kích
                      địch, gây sát thương Hỏa.
                    </p>
                    <p>
                      Kỹ năng nguyên tố (E): Tấn công thường của Yoimiya trở
                      thành sát thương Hỏa.
                    </p>
                    <p>
                      Kỹ năng nộ (Q): Gây sát thương nguyên tố Hỏa; đồng thời
                      đánh dấu địch. Khi các nhân vật khác trong đội (không bao
                      gồm Yoimiya) đánh trúng địch bị đánh dấu, sẽ nổ gây sát
                      thương Hỏa.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/genshin-impact-yoimiya-xay-dung-bieu-ngu-vat-lieu-va-hon-the-nua-1629253087803770638753.jpg"
                      alt="3, GENSHIN IMPACT,GAME,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Bên cạnh một số nhược điểm về ICD, AOE và phản ứng nguyên
                      tố, Yoimiya vẫn có những điểm vượt trội để biến cô thành
                      một DPS hệ Hỏa tuyệt vời. Ngoài ra, Yoimiya cũng có thể
                      đóng vai trò sub DPS hoặc support nhờ mũi tên truy kích và
                      kỹ năng nộ.
                    </p>
                    <h5>Vũ khí</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/d84ff24d-07df-4067-868e-e165f92ffd2f-1629253151072918886024.jpg"
                      alt="4, GENSHIN IMPACT,GAME,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      - Sấm sét rung động (Thundering Pulse): Tăng tấn công (%)
                      và sát thương bạo kích. Đây là lựa chọn vũ khí 5 sao tốt
                      nhất cho Yoimiya.
                    </p>
                    <p>
                      - Cánh thiên không (Skyward Harp): Lựa chọn vũ khí 5 sao
                      tốt thứ 2 cho Yoimiya; nhờ nội tại tăng tỷ lệ bạo kích và
                      sát thương bạo kích.
                    </p>
                    <p>
                      - Cung rỉ sét (Rust): Lựa chọn kinh tế nhưng rất mạnh mẽ
                      cho Yoimiya; có thể tăng từ 40-80% sát thương tấn công
                      thường cho Yoimiya.
                    </p>
                    <p>
                      - Cung trừ ma (Hamayumi): Một lựa chọn "F2P" khác cho
                      Yoimiya, tăng từ 20-32% sát thương tấn công thường và
                      15-24% sát thương trọng kích, có thể nhận được bằng cách
                      rèn.
                    </p>
                    <h5>Thánh di vật</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/genshin-impact-cach-build-yoimiya-5-1629253021940986882298.jpg"
                      alt="5, GENSHIN IMPACT,GAME,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      Giống như các nhân vật DPS/sub DPS khác, người chơi tập
                      trung vào chỉ số tấn công (đồng hồ), sát thương Hỏa (ly),
                      tỷ lệ bạo kích hoặc sát thương bạo kích (mũ). Một số bộ
                      Thánh Di Vật đáng dùng cho Yoimiya bao gồm:
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      - 2 Diệm Liệt Ma Nữ và 2 Giác Đấu Sĩ (hoặc 2 Dòng Hồi Ức):
                      Tăng 15% sát thương Hỏa và 18% tấn công cho Yoimiya.
                    </p>
                    <p>
                      - 4 Diệm Liệt Ma Nữ: Tăng 15% sát thương Hỏa và tăng phản
                      ứng nguyên tố quá tải, thiêu đốt lên 40%. Tuy mất 18% tấn
                      công, người chơi có thể tối ưu sát thương từ phản ứng
                      nguyên tố của Yoimiya.
                    </p>
                    <p>
                      - 4 Dòng Hồi Ức Bất Tận: Tăng 18% tấn công; khi sử dụng kỹ
                      năng nguyên tố (E), sẽ hao tốn 15 năng lượng nguyên tố để
                      tăng 50% sát thương tấn công thường, trọng kích và tấn
                      công khi đáp.
                    </p>
                    <p>
                      Đây được coi là bộ kỹ năng "tủ" của Yoimiya vì tối ưu sát
                      thương tấn công thường/kỹ năng nguyên tố. Tuy nhiên, vì
                      nội tại trên, bộ Thánh di vật này không nên sử dụng cùng
                      với Cung Trừ Ma.
                    </p>
                    <h5>Đội hình tham khảo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/genshin-impact-cach-build-yoimiya-6-16292530387011984541375.jpg"
                      alt="6, GENSHIN IMPACT,GAME,KHÁM PHÁ,"
                      note=""
                    />

                    <p>
                      - Yoimiya/Xingqiu/Beidou(Fischl): Với bộ thánh di vật 4
                      Diệm Liệt Ma Nữ, người chơi có thể sử dụng đội hình này để
                      liên tục tạo phản ứng quá tải, bốc hơi, điện cảm.
                    </p>
                    <p>
                      - Yoimiya/Bennett/Kazuha (Venti, Sucrose): Đội hình "thuần
                      hỏa" này sẽ giúp người chơi dễ dàng dọn sạch những mục
                      tiêu khắc nguyên tố (trừ Hỏa, Nham) rất nhanh chóng.
                    </p>
                    <p>
                      Vị trí cuối cùng người chơi có thể bổ sung theo ý thích,
                      hoặc sử dụng những nhân vật có khiên như Zhongli, Noelle,
                      Diona.
                    </p>
                    <p>
                      Nhìn chung, Yoimiya có thể không so sánh được với một số
                      DPS khác trong <strong>Genshin Impact</strong>. Nhưng nhân
                      vật này vẫn hấp dẫn nhờ lối chơi thú vị, mới mẻ và vẫn đủ
                      sức để cân lượng content hiện tại trong{" "}
                      <strong>game</strong>. Ở tương lai, có thể miHoYo sẽ chỉnh
                      sửa hoặc giúp nhân vật này có nhiều "đất diễn" và đáng sở
                      hữu hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/18/yoimiya-grass-1629253185291157498563.jpg"
                      alt="7, GENSHIN IMPACT,GAME,KHÁM PHÁ,"
                      note=""
                    />

                    <p>(Bài viết chỉ mang tính chất tham khảo).</p>
                    <p></p>
                    <p></p>
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
