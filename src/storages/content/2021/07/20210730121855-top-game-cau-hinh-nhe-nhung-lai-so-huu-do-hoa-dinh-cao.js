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
"timestamp": '30/07/2021 12:18 PM',
"title": 'Top game cấu hình nhẹ nhưng lại sở hữu đồ họa đỉnh cao',
"description": 'Game có đồ họa đẹp không thiếu nhưng game vừa đẹp vừa nhẹ thì lại không nhiều.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627581743584424295397.png',
"alt": 'CỘNG ĐỒNG MẠNG,GAME HAY,GAME ĐỈNH,TIN TỨC GAME,ĐỒ HỌA ĐẸP,MÁY YẾU,CẤU HÌNH THẤP,',
"category": 'games',
"date": '30/07/2021',
"time": '12:18 PM',
"link": '/top-game-cau-hinh-nhe-nhung-lai-so-huu-do-hoa-dinh-cao',
"zcomponent": 'page_20210730121855',
"filepath": './20210730121855-top-game-cau-hinh-nhe-nhung-lai-so-huu-do-hoa-dinh-cao.js'
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
const title = "Top game cấu hình nhẹ nhưng lại sở hữu đồ họa đỉnh cao";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "30/07/2021 12:18 PM";
const description =
  "Game có đồ họa đẹp không thiếu nhưng game vừa đẹp vừa nhẹ thì lại không nhiều.";
const link = "top-game-cau-hinh-nhe-nhung-lai-so-huu-do-hoa-dinh-cao";
const tagparam = [
  "CỘNG ĐỒNG MẠNG",
  "GAME HAY",
  "GAME ĐỈNH",
  "TIN TỨC GAME",
  "ĐỒ HỌA ĐẸP",
  "MÁY YẾU",
  "CẤU HÌNH THẤP",
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

export default function page_20210730121855() {
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
                      Đó là những tựa game đã được nhà phát triển dày công
                      nghiên cứu để tối ưu phần cứng sao cho máy bình dân có thể
                      chiến được. Không những thế, chúng vẫn đem lại trải nghiệm
                      hình ảnh tuyệt vời cho game thủ.{" "}
                    </p>
                    <p>
                      Sau đây là 10 tựa game tuy nhẹ nhưng sở hữu nền đồ họa
                      đỉnh cao mà không cần đến PC cao cấp để chiến. Mời anh em
                      tham khảo nhé.
                    </p>
                    <h5>GTA V</h5>

                    <p>Cấu hình tối thiểu:</p>
                    <p>
                      CPU: Intel Core 2 Quad CPU Q6600 @ 2,40GHz / AMD Phenom
                      9850 Quad-Core{" "}
                    </p>
                    <p>RAM: 4 GB </p>
                    <p>GPU: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB </p>
                    <p>Ổ cứng: 72 GB</p>
                    <p>
                      Huyền thoại GTA V vẫn là một trong những tựa game có đồ
                      họa khá đẹp hiện nay. <strong>Game hay</strong> được so
                      sánh với những siêu phẩm AAA và hầu như top game đình đám
                      nào cũng có mặt của GTA V. Đã từng là thước đo cấu hình
                      vào những năm đầu phát hành, bây giờ thì GTA V đã trở nên
                      "dễ thở" hơn rất nhiều đối với những chiếc PC gaming ngày
                      nay. Trải nghiệm GTA V max setting vẫn xuất sắc như ngày
                      nào, đặc biệt nếu PC của bạn vẫn còn dư hiệu năng thì có
                      thể cài thêm những bản mod nâng cấp đồ họa, mang lại trải
                      nghiệm thực tế hơn cho tựa game gần 10 năm tuổi này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627581743584424295397.png"
                      alt="1, CỘNG ĐỒNG MẠNG,GAME HAY,GAME ĐỈNH,TIN TỨC GAME,ĐỒ HỌA ĐẸP,MÁY YẾU,CẤU HÌNH THẤP,"
                      note=""
                    />
                    <p>
                      Tuy 9800 GT từng vang bóng một thời nhưng về sức mạnh thì
                      chỉ ngang với GT 730 hiện nay. Thế nên bạn có thể trải
                      nghiệm GTA V với cấu hình tương đối nhẹ, hoặc nếu muốn
                      trải nghiệm đồ họa đỉnh cao của GTA V thì cũng không có gì
                      quá khó khăn. Một phần là vì sau nhiều bản cập nhật, GTA V
                      đã tối ưu rất tốt cho phần cứng thế hệ mới rồi.
                    </p>
                    <h5>Monster Hunter: World</h5>

                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: Intel® Core™ i5-4460, 3.20GHz / AMD FX™-6300 </p>
                    <p>RAM: 8 GB </p>
                    <p>
                      GPU: NVIDIA® GeForce® GTX 760 / AMD Radeon™ R7 260x (VRAM
                      2GB){" "}
                    </p>
                    <p>Ổ cứng: 48 GB</p>
                    <p>
                      Trong Monster Hunter: World, bạn sẽ vào vai những thợ săn
                      lão luyện để săn lùng những con quái vật sừng sỏ và khổng
                      lồ nhất trong thế giới bạt ngàn vô cùng bắt mắt. Sự đa
                      dạng về vũ khí, về những con quái to lớn và cơ chế đi săn
                      cực kỳ chân thực như đặt bẫy, sử dụng mùi hương để dụ
                      quái, thậm chí ngay cả con mồi của bạn cũng có cơ chế bỏ
                      chạy khi phát hiện nguy hiểm... tất cả đã giúp Monster
                      Hunter: World trở thành một tựa <strong>game hay</strong>{" "}
                      không cần bàn cãi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-16275817458021064170164.png"
                      alt="2, CỘNG ĐỒNG MẠNG,GAME HAY,GAME ĐỈNH,TIN TỨC GAME,ĐỒ HỌA ĐẸP,MÁY YẾU,CẤU HÌNH THẤP,"
                      note=""
                    />

                    <p>
                      Có thể nói Monster Hunter: World là một tựa game không quá
                      nặng, nhưng đồ họa thì khó thể nào mà chê được các bạn ạ.
                      Vì cấu hình tối thiểu chỉ yêu cầu GTX 760 nên dù PC của
                      bạn không quá mạnh nhưng nếu được ráp trong 2-3 năm trở
                      lại đây thì khả năng cao là vẫn có thể chiến được ở mức
                      cấu hình trung bình thấp. Còn nếu bạn nào có linh kiện xịn
                      hơn như GTX 1060 thì cứ thoải mái đẩy setting lên cao hơn
                      để có trải nghiệm ngon lành nhé.{" "}
                    </p>
                    <p>
                      Ngoài ra, Capcom luôn biết cách đem đến những trải nghiệm
                      mượt mà cho game thủ mà vẫn giữ được{" "}
                      <strong>đồ họa đẹp</strong> nên Monster Hunter: World cũng
                      được tối ưu tốt, bạn không phải lo về vấn đề giật lag
                      trong game.
                    </p>
                    <h5>Ace Combat 7: Skies Unknown</h5>

                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: Intel Core i3-7100</p>
                    <p>RAM: 4 GB </p>
                    <p>GPU: NVIDIA GeForce GTX 750Ti (2GB) </p>
                    <p>Ổ cứng: 50 GB</p>
                    <p>
                      Sau cả chục năm, dòng game Ace Combat vẫn giữ được những
                      ưu điểm làm nên sự thành công của nó. Cụ thể, đó là cốt
                      truyện hoành tráng nhưng vẫn dễ hiểu, gameplay mang tính
                      giải trí cao, và đặc biệt là đồ họa vô cùng đẹp mắt mà
                      không sát phần cứng.
                    </p>
                    <RelationNewsInPage category={category} />

                    <p>
                      Với một dàn PC bình dân tầm hơn chục triệu thôi là bạn đã
                      có thể cân thoải mái tựa <strong>game hay</strong> ho này
                      rồi. Chỉ cần một con card cỡ GTX 1060 hoặc RX 570 trở lên
                      là xong. Đồ họa trong game cũng được tối ưu cực kỳ tốt:
                      Cảnh vật trong game khá là chi tiết, còn những chiếc máy
                      bay chiến đấu thì có độ hoàn thiện rất cao mà hiệu năng
                      game vẫn ổn định, không bị trồi sụt thất thường.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-2-16275817467791924936770.png"
                      alt="3, CỘNG ĐỒNG MẠNG,GAME HAY,GAME ĐỈNH,TIN TỨC GAME,ĐỒ HỌA ĐẸP,MÁY YẾU,CẤU HÌNH THẤP,"
                      note=""
                    />
                    <p>
                      Đặc biệt, những hiệu ứng cháy nổ được miêu tả chân thực và
                      mãn nhãn, nhất là trong những pha rượt đuổi triệt hạ máy
                      bay địch. Ngoài ra, game cũng có một đống skin đủ chủ đề
                      với các chi tiết được vẽ tỉ mỉ, giúp tôn lên những đường
                      nét của chiếc chiến đấu cơ.
                    </p>
                    <h5>Gears 5</h5>

                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: AMD FX-6000 series / Intel i3 Skylake </p>
                    <p>RAM: 8 GB </p>
                    <p>GPU: AMD Radeon R9 280 / NVIDIA GeForce GTX 760</p>
                    <p>Ổ cứng: 80 GB</p>
                    <p>
                      Series bắn súng góc nhìn thứ ba kinh điển này được nhiều
                      game thủ đánh giá là có phong độ cực kỳ ổn định, dù đã
                      từng có sự thay đổi về đội ngũ phát triển. Và phải "qua
                      tay" nhiều đội ngũ như thế nhưng đến Gears 5 thì game vẫn
                      được tối ưu rất tốt, chỉ cần GTX 760 là đã có thể trải
                      nghiệm được tựa game này rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-3-16275817462671065969037.png"
                      alt="4, CỘNG ĐỒNG MẠNG,GAME HAY,GAME ĐỈNH,TIN TỨC GAME,ĐỒ HỌA ĐẸP,MÁY YẾU,CẤU HÌNH THẤP,"
                      note=""
                    />

                    <p>
                      Gameplay của dòng game Gears of War nổi tiếng với sự hoành
                      tráng, mãn nhãn mang đến rất nhiều cung bậc cảm xúc cho
                      người chơi. Đối với Gears 5, từng pha giao tranh cháy nổ
                      đều ấn tượng, song song đó là kho vũ khí cũng đồ sộ với
                      các cơ chế được thiết kế riêng, mỗi cái đều mang lại cho
                      người chơi một cảm giác khác biệt. Bên cạnh đó, tựa game
                      này còn có những màn kết liễu đầy máu me, bạo lực, phù hợp
                      với những bạn thích phong cách "rambo". Nhìn chung, Gears
                      5 là một trong những tựa <strong>game hay</strong> mà bạn
                      nên trải nghiệm, đặc biệt là fan của thể loại bắn súng.
                    </p>
                    <h5>Resident Evil 2 Remake</h5>

                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: Intel Core i5-4460 / AMD FX-6300 </p>
                    <p>RAM: 8 GB </p>
                    <p>GPU: NVIDIA GTX 760 / AMD R7 260x </p>
                    <p>Ổ cứng: 26 GB</p>
                    <p>
                      Resident Evil 2 Remake được xem là một trong những bản
                      remake xuất sắc nhất mọi thời đại. Nó không chỉ tận dụng
                      được trọn vẹn những giá trị đã làm nên thành công của bản
                      gốc mà bản thân nó cũng được xem là một trong những tựa{" "}
                      <strong>game hay</strong> nhất ra mắt vào năm 2019. RE2 đã
                      thay đổi hoàn toàn gameplay, khiến cho người chơi có một
                      cảm giác rất khác. So với phiên bản gốc, RE2 mang sự rùng
                      rợn lên một tầm cao mới, những pha "jump scare" nay đã bất
                      ngờ và giật mình hơn, cũng như tạo hình quái vật hoàn toàn
                      có thể khiến người chơi hoảng loạn mỗi khi chúng lao đến.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-4-16275817498432123433361.jpg"
                      alt="5, CỘNG ĐỒNG MẠNG,GAME HAY,GAME ĐỈNH,TIN TỨC GAME,ĐỒ HỌA ĐẸP,MÁY YẾU,CẤU HÌNH THẤP,"
                      note=""
                    />

                    <p>
                      Ngoài gameplay vừa giải đố vừa bắn zombie vốn đã rất nổi
                      tiếng của RE2, các bạn còn được trải nghiệm{" "}
                      <strong>đồ họa đẹp</strong> mắt làm tăng phần đáng sợ của
                      tựa game so với phiên bản gốc. Dù vậy, cấu hình tối thiểu
                      của RE2 lại không hề đòi hỏi quá nhiều. Tất cả những gì
                      bạn cần là dung lượng RAM 8GB, một con CPU i5-4460 (4
                      nhân/4 luồng) hoặc hơn, cộng với đó là GPU GTX 760 hoặc
                      những chiếc card mạnh hơn và có tối thiểu là 2GB VRAM...
                      là đã có thể chiến thoải mái tựa game này.{" "}
                    </p>
                    <p>
                      Một tựa <strong>game hay</strong> như RE2 mà yêu cầu cấu
                      hình lại khá là nhẹ nên bạn nào thích những thể loại bắn
                      zombie nhưng còn ngại về hiệu năng PC của mình thì đừng
                      chần chừ mà thử ngay RE2 nhé.
                    </p>
                    <p>Theo GVN360</p>
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
