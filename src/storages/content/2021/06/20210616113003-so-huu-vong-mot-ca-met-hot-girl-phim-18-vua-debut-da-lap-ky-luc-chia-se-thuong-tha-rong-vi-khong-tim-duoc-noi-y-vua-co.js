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
"timestamp": '16/06/2021 11:30 AM',
"title": 'Sở hữu vòng một cả mét, hot girl phim 18+ vừa debut đã lập kỷ lục, chia sẻ thường thả rông vì không tìm được nội y vừa cỡ',
"description": 'Cô nàng hot girl này đang là tâm điểm của sự chú ý sau mà debut như mơ của mình.',
"src": 'https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/storages/images/content/2021/20210616113003--15-785283.jpg',
"alt": 'Hot Girl, Gai Xinh, Ichika Seta, Cong Dong Mang, Phim Av, images, Phim 18, ',
"category": 'images',
"date": '16/06/2021',
"time": '11:30 AM',
"link": '/so-huu-vong-mot-ca-met-hot-girl-phim-18-vua-debut-da-lap-ky-luc-chia-se-thuong-tha-rong-vi-khong-tim-duoc-noi-y-vua-co',
"zcomponent": 'page_20210616113003',
"filepath": './20210616113003-so-huu-vong-mot-ca-met-hot-girl-phim-18-vua-debut-da-lap-ky-luc-chia-se-thuong-tha-rong-vi-khong-tim-duoc-noi-y-vua-co.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "images";
const categoryLink = "/images";
const title =
  "Sở hữu vòng một cả mét, hot girl phim 18+ vừa debut đã lập kỷ lục, chia sẻ thường thả rông vì không tìm được nội y vừa cỡ";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "16/06/2021 11:30 AM";
const description =
  "Cô nàng hot girl này đang là tâm điểm của sự chú ý sau mà debut như mơ của mình.";
const link =
  "so-huu-vong-mot-ca-met-hot-girl-phim-18-vua-debut-da-lap-ky-luc-chia-se-thuong-tha-rong-vi-khong-tim-duoc-noi-y-vua-co";
const tagparam = [
  "hot-girl",
  "gai-xinh",
  "ichika-seta",
  "cong-dong-mang",
  "phim-av",
  "av",
  "phim-18",
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

export default function page_20210616113003() {
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
                    Mỗi năm, ngành công nghiệp <strong>AV</strong> Nhật Bản lại
                    chào đón thêm tới cả chục nghìn những tân binh tiềm năng
                    mới. Tuy nhiên, số lượng diễn viên thành công thì có lẽ chỉ
                    đếm trên đầu ngón tay - điều cho thấy sự cạnh tranh vô cùng
                    khốc liệt giữa các cô nàng <strong>hot girl</strong> trong
                    ngành này. Để có thể trở nên nổi tiếng như những Yua Mikami,
                    Yui Hatano, chẳng những cần mặt xinh dáng đẹp, các cô nàng
                    hot girl còn phải sở hữu những yếu tố đặc biệt, dễ thu hút.
                    Điển hình như trường hợp của <strong>Ichika Seta</strong>{" "}
                    dưới đây, một tân binh đang quá nổi tiếng với vòng một có
                    kích thước tới cả mét của mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113003--10-086111.jpg")
                        .default
                    }
                    alt="1Hot Girl, Gai Xinh, Ichika Seta, Cong Dong Mang, Phim Av, images, Phim 18, "
                    note="Ichika Seta - nàng hot girl đang gây bão ngành công nghiệp AV Nhật Bản"
                  />
                  <p>
                    Với vòng một E-Cup khổng lồ của mình,{" "}
                    <strong>Ichika Seta</strong> đi tới đâu cũng nhanh chóng trở
                    thành một gương mặt nổi bật. Ngay từ khi còn là streamer, cô
                    nàng đã sở hữu lượng fan đông đảo. Nhưng rồi một phần vì thu
                    nhập thấp, hơn nữa lại còn thường xuyên bị quấy rối bằng
                    những tin nhắn, đề nghị khiếm nhã, Ichika quyết định đổi
                    đời, từ bỏ công việc streamer và dấn thân vào ngành công
                    nghiệp phim <strong>AV</strong> Nhật Bản.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113003--11-787614.jpg")
                        .default
                    }
                    alt="2Hot Girl, Gai Xinh, Ichika Seta, Cong Dong Mang, Phim Av, images, Phim 18, "
                    note="Cô nàng xinh đẹp và gợi cảm này quyết định đổi đời bằng cách dấn thân vào ngành công nghiệp AV Nhật Bản"
                  />
                  <p>
                    Mãi tới tận tháng 5 mới debut, thế nhưng{" "}
                    <strong>Ichika Seta</strong> đã nhanh chóng thiết lập kỷ lục
                    cho riêng mình với việc lọt vào top từ khóa tìm kiếm chỉ
                    ngay sau khi ra mắt tác phẩm đầu tiên. Tới mức mà hiện tại,
                    lượng fan của Seta không ngừng tăng lên theo thời gian và đa
                    số đều đánh giá, cô nàng thừa khả năng để tiến vào hàng ngũ
                    những ngôi sao top đầu nếu như vẫn duy trì được sự chăm chỉ
                    và vóc dáng như hiện tại.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113003--12-624734.jpg")
                        .default
                    }
                    alt="3Hot Girl, Gai Xinh, Ichika Seta, Cong Dong Mang, Phim Av, images, Phim 18, "
                    note="Cô nàng được đánh giá là tân binh tiềm năng nhất trong năm nay tính tới thời điểm hiện tại"
                  />
                  <RelationNewsInPage category={category} />
                  <p>
                    Bên cạnh đó, nàng <strong>hot girl</strong> cũng học theo
                    các bậc tiền bối rất nhanh, khi mà bên cạnh việc spam
                    TikTok, cô nàng cũng rất chủ động "khêu gợi" các fan thông
                    qua trang cá nhân của mình. Cách đây không lâu, cô nàng vừa
                    khiến cho không ít fan phải "chảy máu mũi" với chia sẻ cực
                    kỳ hồn nhiên của mình. Cụ thể, Ichika cho rằng vì vòng một
                    quá to, thật khó để có thể tìm được nội y vừa vặn nên cô
                    nàng tương đối chuộng việc thả rông mỗi khi có thể. Theo lời
                    Ichika, điều này cũng giúp cô nàng thoải mái và bảo vệ sức
                    khỏe, thân thể khi phải gánh đôi gò bồng đảo khổng lồ của
                    mình.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113003--13-001717.jpg")
                        .default
                    }
                    alt="4Hot Girl, Gai Xinh, Ichika Seta, Cong Dong Mang, Phim Av, images, Phim 18, "
                    note="Ichiaka Seta thường xuyên gặp khó khăn trong việc lựa chọn nội y"
                  />
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113003--14-784725.jpg")
                        .default
                    }
                    alt="5Hot Girl, Gai Xinh, Ichika Seta, Cong Dong Mang, Phim Av, images, Phim 18, "
                    note="Đó cũng là lý do mà cô nàng rất chuộng mốt thả rông"
                  />
                  <p>
                    Ngoài ra, cô nàng còn khiến cho không ít fan phải hoang mang
                    khi liên tục thú nhận bản thân đang cô đơn, cực kỳ cô đơn ở
                    thời điểm hiện tại. Và để giải tỏa, Ichika đang dự định sẽ
                    nhận nuôi một chú mèo để bầu bạn. Chưa biết việc nhận nuôi
                    mèo tới bao giờ mới được thực hiện, nhưng hiện tại, đã có
                    không ít fan của Seta xin được cô nàng "nhận nuôi" rồi.
                  </p>
                  <ContentImage
                    src={
                      require("storages/images/content/2021/20210616113003--15-785283.jpg")
                        .default
                    }
                    alt="6Hot Girl, Gai Xinh, Ichika Seta, Cong Dong Mang, Phim Av, images, Phim 18, "
                    note=""
                  />
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
