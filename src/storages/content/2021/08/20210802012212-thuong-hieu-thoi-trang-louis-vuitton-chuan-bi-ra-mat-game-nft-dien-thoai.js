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
"timestamp": '02/08/2021 01:22 AM',
"title": 'Thương hiệu thời trang Louis Vuitton chuẩn bị ra mắt game NFT điện thoại',
"description": 'Không chỉ lấn sân sang ngành game, thương hiệu thời trang của Pháp cũng sẽ sử dụng luôn cả NFT.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16278756721141711018649.jpg',
"alt": 'THƯƠNG HIỆU THỜI TRANG,GAME NFT,NFT,TIỀN ẢO,BLOCKCHAIN,TRÒ CHƠI ĐIỆN TỬ,',
"category": 'games',
"date": '02/08/2021',
"time": '01:22 AM',
"link": '/thuong-hieu-thoi-trang-louis-vuitton-chuan-bi-ra-mat-game-nft-dien-thoai',
"zcomponent": 'page_20210802012212',
"filepath": './20210802012212-thuong-hieu-thoi-trang-louis-vuitton-chuan-bi-ra-mat-game-nft-dien-thoai.js'
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
  "Thương hiệu thời trang Louis Vuitton chuẩn bị ra mắt game NFT điện thoại";
const author = "Lê Hảo";
const source = "Pháp luật và bạn đọc";
const timestamp = "02/08/2021 01:22 AM";
const description =
  "Không chỉ lấn sân sang ngành game, thương hiệu thời trang của Pháp cũng sẽ sử dụng luôn cả NFT.";
const link =
  "thuong-hieu-thoi-trang-louis-vuitton-chuan-bi-ra-mat-game-nft-dien-thoai";
const tagparam = [
  "THƯƠNG HIỆU THỜI TRANG",
  "GAME NFT",
  "NFT",
  "TIỀN ẢO",
  "BLOCKCHAIN",
  "TRÒ CHƠI ĐIỆN TỬ",
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

export default function page_20210802012212() {
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
                      Với mục tiêu kỉ niệm sinh nhật thứ 200 của nhà thiết kế
                      Louis Vuitton, <strong>thương hiệu thời trang</strong>{" "}
                      mang tên ông đã quyết định ra mắt một tựa game di động
                      mang tên Louis: The Game.
                    </p>
                    <p>
                      Nhân vật chính của trò chơi này là Vivienne, linh vật của
                      thương hiệu. Cô là một búp bê gỗ được trang trí với các
                      họa tiết hoa và kí hiệu LV nổi tiếng.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-1627875671219956652558.jpg"
                      alt="1, THƯƠNG HIỆU THỜI TRANG,GAME NFT,NFT,TIỀN ẢO,BLOCKCHAIN,TRÒ CHƠI ĐIỆN TỬ,"
                      note="Lightning trở thành người mẫu cho LV."
                    />
                    <p>
                      Xuyên suốt trò chơi, Vivienne sẽ phải đối mặt với nhiều
                      nhiệm vụ khác nhau và những nhiệm vụ này sẽ đưa game thủ
                      đi qua lịch sử lâu đời của Louis Vuitton. Người chơi sẽ
                      được biết cách Vuitton từ một người lái xe ba bánh trở
                      thành nhà sáng lập của thương hiệu nổi tiếng toàn cầu.
                    </p>
                    <p>
                      Kết hợp giữa quá khứ và hiện tại, Louis: The game cũng sẽ
                      được nhúng với các Non-fungible token (
                      <strong>NFT</strong>
                      ). Trong khoảng thời gian gần đây NFT đã trở thành một chủ
                      đề sôi nổi với nhiều NFT còn được bán với giá hàng triệu
                      USD.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-1-16278756721141711018649.jpg"
                      alt="2, THƯƠNG HIỆU THỜI TRANG,GAME NFT,NFT,TIỀN ẢO,BLOCKCHAIN,TRÒ CHƠI ĐIỆN TỬ,"
                      note=""
                    />
                    <p>
                      Liệu những <strong>NFT</strong> này có đáng giá gần như
                      thế hay không vẫn còn là dự đoán của mọi người, nhưng điều
                      đó có lẽ sẽ khuyến khích những khách hàng am hiểu về công
                      nghệ của Louis Vuitton cố gắng có được chúng. Điều này cho
                      thấy rằng thương hiệu Pháp đang đặt cược nghiêm túc vào
                      công nghệ <strong>blockchain</strong> và tầm ảnh hưởng của
                      nó đối với tương lai của thời trang cao cấp.
                    </p>
                    <p>
                      Louis: The Game sẽ chính thức ra mắt trên toàn thế giới
                      vào ngày 4 tháng 8, vào đúng sinh nhật thứ 200 của nhà
                      thiết/sáng lập Louis Vuitton. Trò chơi được thiết kế cho
                      cả iOS và Android, có thể tải xuống thông qua App Store và
                      Google Play.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Đây không phải là lần đầu tiên Louis Vuitton lấn sân sang
                      thế giới <strong>trò chơi điện tử</strong>. Vào năm 2016,
                      để quảng cáo bộ sưu tập Xuân/Hè, LV đã sử dụng Lightning -
                      nữ nhân vật chính của trò chơi Final Fantasy XIII - làm
                      người mẫu cho bộ sưu tập.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/2/photo-2-1627875672631826115471.jpg"
                      alt="3, THƯƠNG HIỆU THỜI TRANG,GAME NFT,NFT,TIỀN ẢO,BLOCKCHAIN,TRÒ CHƠI ĐIỆN TỬ,"
                      note=""
                    />
                    <p>
                      Vào năm 2019, thương hiệu cũng ra mắt Endless Runner, một{" "}
                      <strong>trò chơi điện tử</strong> 16-bit mang phong cách
                      retro, lấy cảm hứng từ bộ sưu tập quần áo nam Thu/Đông
                      2019 của giám đốc sáng tạo Virgil Abloh. Tuy nhiên, trò
                      chơi chỉ có thể chơi được trên trang web của Louis
                      Vuitton, không giống như ứng dụng Louis: The Game sắp ra
                      mắt.
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
