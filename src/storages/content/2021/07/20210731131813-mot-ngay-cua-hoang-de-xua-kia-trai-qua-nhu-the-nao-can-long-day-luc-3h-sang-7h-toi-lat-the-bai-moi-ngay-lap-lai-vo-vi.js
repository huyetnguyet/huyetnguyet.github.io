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
"timestamp": '31/07/2021 01:18 PM',
"title": 'Một ngày của hoàng đế xưa kia trải qua như thế nào? Càn Long dậy lúc 3h sáng, 7h tối lật thẻ bài, mỗi ngày lặp lại vô vị',
"description": 'Cuộc sống của hoàng đế có thực sự vui vẻ, cả ngày chỉ ăn chơi hưởng lạc như chúng ta vẫn nghĩ?',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-16275485979551090830879.jpg',
"alt": 'Trung Quốc cổ đại,Càn Long,',
"category": 'news',
"date": '31/07/2021',
"time": '01:18 PM',
"link": '/mot-ngay-cua-hoang-de-xua-kia-trai-qua-nhu-the-nao-can-long-day-luc-3h-sang-7h-toi-lat-the-bai-moi-ngay-lap-lai-vo-vi',
"zcomponent": 'page_20210731131813',
"filepath": './20210731131813-mot-ngay-cua-hoang-de-xua-kia-trai-qua-nhu-the-nao-can-long-day-luc-3h-sang-7h-toi-lat-the-bai-moi-ngay-lap-lai-vo-vi.js'
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
  "Một ngày của hoàng đế xưa kia trải qua như thế nào? Càn Long dậy lúc 3h sáng, 7h tối lật thẻ bài, mỗi ngày lặp lại vô vị";
const author = "PHẠM TRANG,";
const source = "Pháp luật & Bạn đọc";
const timestamp = "31/07/2021 01:18 PM";
const description =
  "Cuộc sống của hoàng đế có thực sự vui vẻ, cả ngày chỉ ăn chơi hưởng lạc như chúng ta vẫn nghĩ?";
const link =
  "mot-ngay-cua-hoang-de-xua-kia-trai-qua-nhu-the-nao-can-long-day-luc-3h-sang-7h-toi-lat-the-bai-moi-ngay-lap-lai-vo-vi";
const tagparam = ["Trung Quốc cổ đại", "Càn Long"];
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

export default function page_20210731131813() {
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
                      Nhịp sống trong xã hội hiện đại ngày càng nhanh, dù điều
                      kiện vật chất ngày một nâng cao nhưng cũng kéo theo đó là
                      vô vàn áp lực. Nhiều người mơ ước trở về thời cổ đại, sống
                      một cuộc đời vô ưu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-1627548600614786171585.jpg"
                      alt="6, Trung Quốc cổ đại,Càn Long,"
                      note=""
                    />
                    <p>
                      Nhưng thật ra cuộc sống thời cổ đại cũng không hề đẹp đẽ
                      như trong tưởng tượng. Cơ sở vật chất lạc hậu, tư tưởng
                      con người chìm trong lễ giáo phong kiến cổ hủ, áp lực
                      không hề nhỏ hơn chúng ta ở hiện tại. Ngay cả hoàng đế
                      cũng không ngoại lệ.
                    </p>
                    <h5>
                      Vậy công việc thường ngày của các hoàng đế thời cổ đại là
                      gì?
                    </h5>
                    <p>
                      Lấy Hoàng đế <strong>Càn Long</strong> của nhà Thanh làm
                      ví dụ, có thể nói ông là vị hoàng đế có cuộc sống thoải
                      mái, an nhàn nhất thời phong kiến. Ông nội Khang Hy đã
                      giúp ông dẹp tan mọi mối đe dọa đến từ các khu vực lân
                      cận, cha là Ung Chính để lại cho một nguồn quốc khố dư dả.
                      Nhiều người nghĩ Càn Long đế rất nhàn hạ nhưng thật ra mỗi
                      ngày đều rất bận rộn. Ông dậy từ 3h sáng và lật thẻ bài
                      thị tẩm lúc 7 giờ tối. Cuộc sống xa hoa mà nhàm chán cứ
                      thế lặp đi lặp lại trong suốt 63 năm 4 tháng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-16275485979551090830879.jpg"
                      alt="1, Trung Quốc cổ đại,Càn Long,"
                      note=""
                    />
                    <p>
                      Thời kỳ <strong>Càn Long</strong> là thời kỳ nhà Thanh có
                      diện tích lãnh thổ lớn nhất, lên tới 13,1 triệu km vuông
                      với dân số trên 300 triệu người. Hơn nữa, vào thời nhà
                      Thanh, quyền lực của triều đình tập trung ở mức tối đa,
                      hoàng đế cần xử lý những việc trọng đại trong cả nước.
                      Ngay cả khi Khang Hy và Ung Chính đã xây dựng cho Càn Long
                      một nền móng vững chắc thì cũng khó mà quản lý được khối
                      lượng công việc của một quốc gia lớn như vậy.
                    </p>
                    <p>
                      Trong mắt nhiều người, <strong>Càn Long</strong> là một vị
                      hoàng đế rất lười biếng, cả ngày chỉ biết du sơn ngoạn
                      thủy, 6 lần đến Giang Nam thăm thú. Nhưng trên thực tế,
                      Càn Long vẫn khá chăm chỉ, ít nhất là hơn một số người ở
                      hiện tại vì khi mọi người còn đang say giấc, ông đã bắt
                      đầu làm việc.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-162754860047944342427.jpg"
                      alt="2, Trung Quốc cổ đại,Càn Long,"
                      note=""
                    />
                    <p>
                      Dưới triều đại của <strong>Càn Long</strong>, nhà Thanh
                      đạt đến đỉnh cao, đời sống bách tính ấm no hạnh phúc. Tuy
                      nhiên, Càn Long đế vẫn phải thượng triều mỗi ngày bàn
                      chuyện chính sự vì Khang Hy đã đặt ra quy định này. Càn
                      Long luôn một lòng ngưỡng mộ ông nội của mình, đương nhiên
                      ở phương diện này càng không dám có chút sơ hở. Cho nên,
                      dù có vất vả đến đâu đi chăng nữa, ông cũng duy trì đều
                      đặn việc lên triều từ rất sớm.
                    </p>
                    <p>
                      Vào thời cổ đại, đi lại khó khăn, các quan đại thần để có
                      thể vào cung lâm triều từ sớm chỉ có thể ngồi xe ngựa. Để
                      không chậm trễ việc lâm triều vào sáng sớm, các quan đại
                      thần mỗi ngày từ 3h sáng đã phải thức dậy chuẩn bị, cho
                      nên lâm triều vào sáng sớm đối với các quan đại thần mà
                      nói, thật ra cũng là một việc khá vất vả.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-162754860051329838124.jpg"
                      alt="3, Trung Quốc cổ đại,Càn Long,"
                      note=""
                    />
                    <p>
                      Hoàng đế <strong>Càn Long</strong> sống trong hoàng cung,
                      mặc dù mỗi ngày không phải vất vả bôn ba, chạy đôn chạy
                      đáo nhưng đều phải dậy từ 3h sáng. Bởi trước khi lâm
                      triều, hoàng đế thường vào giờ Dần (tức là khoảng từ 3 -
                      5h) bàn việc quân cơ với các đại thần, nắm trước một chút
                      về chính sự, sau đó mới tiếp các quan cấp dưới. Như vậy,
                      thời gian lâm triều sẽ vào khoảng từ 5 - 7h.
                    </p>
                    <p>
                      Sau khi lâm triều, hoàng thượng sẽ quay về Dưỡng Tâm điện
                      nghỉ ngơi một chút, bổ sung năng lượng với các loại bánh
                      trái điểm tâm. Dưỡng Tâm điện còn là nơi các hoàng đế
                      triều Thanh phê chuẩn tấu chương. Tấu chương trong cả nước
                      đều tập trung tại đây chờ phê chuẩn. Trong chuyện phê
                      chuẩn tấu chương, cả <strong>Càn Long</strong>, Ung Chính
                      hay Khang Hy đều giống nhau, chính tay mình phê chuẩn chứ
                      tuyệt đối không nhờ người khác.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Nhà Thanh có lãnh thổ rộng lớn, dân số đông, mọi việc đều
                      do một mình <strong>Càn Long</strong> giải quyết, khối
                      lượng công việc mỗi ngày lớn đến chừng nào có thể hình
                      dung được. Khi xem tấu chương, thường chỉ những sự việc
                      đặc biệt quan trọng mới thu hút sự chú ý của Càn Long.
                      Những tấu chương như vậy sẽ để đến ngày hôm sau cùng các
                      quan lâm triều cùng thảo luận. Hầu hết các tấu chương đều
                      báo cáo những việc bình thường ở mức tầm thường. Sau khi
                      đọc chúng, Càn Long đế thường chỉ viết mấy chữ có lệ như:
                      “Đã xem” hoặc “Đọc được rất vui” biểu thị bản thân đã biết
                      chuyện này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-1627548600973879431822.jpg"
                      alt="4, Trung Quốc cổ đại,Càn Long,"
                      note=""
                    />
                    <p>
                      Một số người có thể thắc mắc, chẳng nhẽ hoàng đế không ăn
                      sáng sao? Tại sao sau khi lâm triều xong lại đến thẳng
                      Dưỡng Tâm điện? Thực ra, chế độ ăn uống của hoàng đế nhà
                      Thanh rất đơn giản. <strong>Càn Long</strong> chỉ ăn 2 bữa
                      mỗi ngày là bữa sáng và bữa trưa. Bữa sáng điểm tâm bình
                      thường sẽ vào khoảng từ 6 - 8h sáng, bữa trưa sẽ vào
                      khoảng từ 1 - 2h trưa. Nếu như vào mùa hạ thu thì sẽ ăn
                      trước khoảng 1 tiếng.
                    </p>
                    <p>
                      Bữa sáng của <strong>Càn Long</strong> đế khá đơn giản,
                      sau khi thượng triều ông sẽ ăn một chút ở Dưỡng Tâm điện.
                      Bữa tối thì phong phú hơn rất nhiều. Bình thường sẽ có
                      hàng chục đến hàng trăm món. Với số lượng món ăn lớn như
                      vậy, không ăn hết thì sẽ làm cách nào? Ăn không hết chỉ có
                      thể đổ đi, thỉnh thoảng cũng sẽ ban thưởng cho các quan
                      đại thần. Các quan đại thần bất kể có thích ăn hay không,
                      có đói hay không, một khi hoàng thượng đã ban thưởng thì
                      chỉ có thể ăn sạch sẽ, hơn nữa còn phải khen: “Hương vị
                      này quả nhiên đỉnh của chóp.”
                    </p>
                    <p>
                      <strong>Càn Long</strong> ăn mỗi ngày hai bữa, nếu những
                      lúc khác đói bụng thì phải làm thế nào? Đối với hoàng đế
                      thì đây không phải vấn đề lớn. Chỉ cần liếc mắt một cái,
                      kẻ hầu cận sẽ lập tức biết ý dâng lên rất nhiều điểm tâm.
                      Đôi khi những tấu chương cần phê duyệt phải đến nửa đêm
                      mới có thể xong hết, nếu như đói thì có thể gọi trù phòng
                      làm thêm bữa ăn đêm, nhưng điều này hiếm khi xảy ra.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-16275486005462007888019.jpg"
                      alt="5, Trung Quốc cổ đại,Càn Long,"
                      note=""
                    />
                    <p>
                      Sau khi ăn trưa, nếu việc triều chính còn chưa xử lý xong,{" "}
                      <strong>Càn Long</strong> sẽ trở về Dưỡng Tâm điện làm
                      nốt. Nhưng nếu đã hoàn thành chính sự thì có thể cùng cung
                      tần dạo chơi vườn thượng uyển hoặc làm một số việc mình
                      yêu thích. Với Càn Long mà nói, có một việc mà ngày ngày,
                      bất kể có bận đến đâu ông cũng phải làm, chính là làm thơ.
                      Cả đời Càn Long đã viết đến hơn 40.000 bài thơ, chưa bàn
                      đến hay dở thế nào thì số lượng tác phẩm này cũng khiến
                      người ta nể phục.
                    </p>
                    <p>
                      Công việc trong ngày gần xong thì sắc trời cũng ngả tối.
                      7h tối mỗi ngày là lúc <strong>Càn Long</strong> lật thẻ
                      bài. Nhà Thanh vẫn luôn kiểm soát chặt chẽ các hành vi sắc
                      dục của hoàng đế, đến giờ sẽ có người gọi cửa nhắc nhở.
                      Đây là giáo huấn mà tổ tiên để lại, Càn Long dù có là
                      hoàng đế cũng phải nghiêm túc tuân theo.
                    </p>
                    <p>
                      Dù là hoàng đế nhưng <strong>Càn Long</strong> mỗi ngày
                      đều rất bận rộn, không hề nhàn nhã như mọi người vẫn
                      tưởng. Vì vậy, làm hoàng đế xưa nay không phải là một
                      chuyện dễ dàng gì. Ngay cả Vạn Lịch đế, dù có ăn chơi vô
                      độ, 20 năm không thiết triều thì cũng gặp khó khăn cùng
                      quẫn khi không thể lựa chọn được người thừa kế theo ý
                      nguyện.
                    </p>
                    <p>
                      So với thời cổ đại, xã hội hiện đại đã tốt đẹp hơn rất
                      nhiều. Thay vì cứ mãi ôm hận uất ức cuộc sống, hãy biến áp
                      lực thành động lực, hướng tới ngày mai tươi sáng hơn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/7/29/-1627548600614786171585.jpg"
                      alt="7, Trung Quốc cổ đại,Càn Long,"
                      note=""
                    />
                  </div>
                  <AdsHorizontal />
                </div>

                <RandomFeature />

                <div className="source">Source: {source}</div>

                <FacebookShareButton link={facebookLinkShare} />

                <div className="tags">Tags: {updatedTags}</div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
