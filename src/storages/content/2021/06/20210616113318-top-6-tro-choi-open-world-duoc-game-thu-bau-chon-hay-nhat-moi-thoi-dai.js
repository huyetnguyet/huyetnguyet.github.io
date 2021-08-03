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
"timestamp": '16/06/2021 11:33 AM',
"title": 'Top 6 trò chơi open-world được game thủ bầu chọn hay nhất mọi thời đại',
"description": 'Game open-world (thế giới mở) là thể loại game được thiết kế theo cách để người chơi có thể đi lại trong một thế giới ảo và khá tự do trong việc quyết định khi nào hoàn thành các nhiệm vụ.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-162374721916734234660.jpg',
"alt": 'Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, ',
"category": 'games',
"date": '16/06/2021',
"time": '11:33 AM',
"link": '/top-6-tro-choi-open-world-duoc-game-thu-bau-chon-hay-nhat-moi-thoi-dai',
"zcomponent": 'page_20210616113318',
"filepath": './20210616113318-top-6-tro-choi-open-world-duoc-game-thu-bau-chon-hay-nhat-moi-thoi-dai.js'
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
  "Top 6 trò chơi open-world được game thủ bầu chọn hay nhất mọi thời đại";
const author = "Green";
const source = "Trí Thức Trẻ";
const timestamp = "16/06/2021 11:33 AM";
const description =
  "Game open-world (thế giới mở) là thể loại game được thiết kế theo cách để người chơi có thể đi lại trong một thế giới ảo và khá tự do trong việc quyết định khi nào hoàn thành các nhiệm vụ.";
const link =
  "top-6-tro-choi-open-world-duoc-game-thu-bau-chon-hay-nhat-moi-thoi-dai";
const tagparam = [
  "kham-pha",
  "game-online",
  "game",
  "tro-choi-dien-tu",
  "gia-tri",
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

export default function page_20210616113318() {
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
            <AdsVertical />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <RelationNews category={category} />
                <div className="contentBody">
                  <div className="contentBodyLeft">
                    <p>
                      Dòng <strong>game</strong> thế giới mở với thiết lập phong
                      phú cùng cốt truyện được đầu tư, giúp cho người chơi có
                      thể tương tác, sáng tạo một cách độc đáo. Những tựa game
                      open-world được lòng game thủ khi đồ họa đẹp, các nhân vật
                      thiết kế tỉ mỉ cả về nội dung lẫn gameplay thú vị.
                    </p>
                    <h3>1. Red Dead Redemption 2</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-162374721916734234660.jpg"
                      alt="1Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237472350751461319571.jpg"
                      alt="2Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <p>
                      Trò chơi dạng open-world có hai chế độ: chơi đơn hoặc chơi
                      mạng. Người chơi nhập vai Athur Morgan, kẻ sống ngoài vòng
                      pháp luật và là thành viên của một băng đảng Van der Line.
                      Các yếu tố của <strong>game</strong> chịu ảnh hưởng nhiều
                      từ phần trò chơi trước như việc bắn súng, trộm cắp, săn
                      bắn và tương tác với các NPC xung quanh trong đến các tính
                      năng mới như đấu tay đôi, hệ thống danh dự và bơi lội…
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/6/15/rdr2pcposter-1623747172469733559495.jpg"
                      alt="3Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237472547311648596373.jpg"
                      alt="4Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <p>
                      Vùng đất chưa khai phá trong Red Dead Redemption 2 chiếm
                      phần lớn trong thế giới trò chơi và có cảnh quan khá đa
                      dạng. Ngựa là phương tiện di chuyển chính, vì thế người
                      chơi phải chăm sóc, huấn luyện, thuần hóa nhiều loài ngựa
                      khác nhau. Càng có nhiều ngựa và ngựa càng thân thiết thì
                      người chơi sẽ càng giành được nhiều lợi thế.
                    </p>
                    <h3>2. Witcher 3: Wild Hunt</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-1623747268779215565854.jpg"
                      alt="5Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237472856361398540726.jpg"
                      alt="6Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237473115141684970123.jpg"
                      alt="7Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-162374734825081058724.jpg"
                      alt="8Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <p>
                      Series Witcher vốn là tượng đài bất hủ trong dòng{" "}
                      <strong>game</strong> open-world. Witcher 3 nổi bật lên
                      trong số đó với đồ họa đẹp, soundtrack tuyệt vời và các
                      nhân vật cực kỳ ấn tượng. Phần gameplay vui vẻ, cuốn hút
                      người chơi tham gia các quest bên lề để thu thập exp.
                    </p>
                    <h3>3. Elder Scroll 5: Skyrim</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237473482511845147039.jpg"
                      alt="9Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-1623747348252364886113.jpg"
                      alt="10Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <p></p>
                    <p>
                      Tựa <strong>game</strong> nhập vai này có cốt truyện xoay
                      quanh hành trình đánh bại Alduin, một con rồng được tiên
                      đoán sẽ hủy diệt thế giới. Lấy bối cảnh tại địa danh hư
                      cấu Skyrim, sau phần game Oblivion 200 năm, game cho phép
                      người chơi tự do khám phá thế giới, cũng như lựa chọn bỏ
                      qua hoặc trì hoãn thực hiện các nhiệm vụ.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h3>4. The Legend of Zelda: Breath of the Wild</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237474150911968103050.jpg"
                      alt="11Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237474150911316859053.jpg"
                      alt="12Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237474150921844992095.jpg"
                      alt="13Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <p>
                      So với phần <strong>game</strong> trước đó, Legend of
                      Zelda: Breath of the Wild đem đến một thế giới mở hoàn
                      toàn, với độ lớn gấp 12 lần so với thế giới mở trong
                      Twilight Princess, và không hề quan trọng lối đi vào hay
                      đi ra của một khu vực nào đó. Người chơi chỉ cần nắm được
                      một số hướng dẫn, rồi sau đó có thể tự do khám phá thế
                      giới tùy theo tốc độ chơi của riêng mình. Điểm đặc biệt
                      khác ở trò chơi là việc có hệ thống mô phỏng vật lý và hệ
                      thống mô phỏng hóa học với những công thức khá nhất quán,
                      cho phép người chơi giải quyết vấn đề theo nhiều cách khác
                      nhau, tăng mức độ tương tác cũng như trải nghiệm game.
                    </p>
                    <h3>5. Grand Theft Auto V</h3>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237474719671071866892.jpg"
                      alt="14Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-1623747471965691385294.jpg"
                      alt="15Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-1623747471967335725745.jpg"
                      alt="16Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <p>
                      GTA là trò chơi hành động phiêu lưu thế giới mở, người
                      chơi sẽ vừa làm nhiệm vụ vừa tự do khám phá thế giới mở
                      tại hai khu vực là vùng nông thôn của San Andreas và thành
                      phố Los Santos. Thế giới trong GTA 5 mở rộng hơn so với
                      các phần <strong>game</strong> trước đó để người chơi có
                      thể thoải mái khám phá mà không gặp bất kỳ giới hạn nào.
                    </p>
                    <h3>6. Assassin’s Creed Odyssey</h3>
                    <p>
                      Phần <strong>game</strong> thứ 11 trong loạt game
                      Assassin’s Creed của hãng Ubisoft mượn bối cảnh cuộc chiến
                      Peloponnesian giữa Athens và Sparta. Người chơi sẽ vào vai
                      một người lính đánh thuê trong quân đội Hy Lạp, lên đường
                      thực hiện các nhiệm vụ khốc liệt, song song với đó là việc
                      phá hủy giáo phái tà ác đang bao trùm Hy Lạp, khám phá cổ
                      vật cùng quái vật từ thời đại Atlantean. Vì lựa chọn một
                      bối cảnh lịch sử hoành tráng, thế giới trong game được mở
                      rộng hết mức có thể, mô phỏng lại các thành bang Hy Lạp
                      cũng như vùng Địa Trung Hải thời cổ đại.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-16237475339701270565638.jpg"
                      alt="17Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-1623747533971136654709.jpg"
                      alt="18Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/15/-1623747533971203204569.jpg"
                      alt="19Kham Pha, Game Online, Game, Tro Choi Dien Tu, Gia Tri, "
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
