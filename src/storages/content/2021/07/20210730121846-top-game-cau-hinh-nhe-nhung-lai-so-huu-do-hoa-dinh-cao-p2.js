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
"title": 'Top game cấu hình nhẹ nhưng lại sở hữu đồ họa đỉnh cao (P.2)',
"description": 'Game có đồ họa đẹp không thiếu nhưng game vừa đẹp vừa nhẹ thì lại không nhiều.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-16276148883661382259834.jpg',
"alt": 'GAME HAY,GAME NHẸ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,',
"category": 'games',
"date": '30/07/2021',
"time": '12:18 PM',
"link": '/top-game-cau-hinh-nhe-nhung-lai-so-huu-do-hoa-dinh-cao-p2',
"zcomponent": 'page_20210730121846',
"filepath": './20210730121846-top-game-cau-hinh-nhe-nhung-lai-so-huu-do-hoa-dinh-cao-p2.js'
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
const title = "Top game cấu hình nhẹ nhưng lại sở hữu đồ họa đỉnh cao (P.2)";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "30/07/2021 12:18 PM";
const description =
  "Game có đồ họa đẹp không thiếu nhưng game vừa đẹp vừa nhẹ thì lại không nhiều.";
const link = "top-game-cau-hinh-nhe-nhung-lai-so-huu-do-hoa-dinh-cao-p2";
const tagparam = ["GAME HAY", "GAME NHẸ", "TIN TỨC GAME", "CỘNG ĐỒNG MẠNG"];
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

export default function page_20210730121846() {
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
                      hình ảnh tuyệt vời cho game thủ.
                    </p>
                    <p>
                      Sau đây là 10 tựa game tuy nhẹ nhưng sở hữu nền đồ họa
                      đỉnh cao mà không cần đến PC cao cấp để chiến. Mời anh em
                      tham khảo nhé.
                    </p>
                    <h5>Subnautica</h5>
                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: CPU 2 nhân 4 luồng, xung 2,5 GHz </p>
                    <p>RAM: 4 GB </p>
                    <p>GPU: Intel HD 4600 </p>
                    <p> Ổ cứng: 20 GB</p>
                    <p>
                      Subnautica là một trong những tựa game indie có thể nói là
                      thành công nhất ngay từ khi ra mắt. Đây cũng là một đại
                      diện cực kỳ tiêu biểu trong những tựa game thuộc thể loại
                      phiêu lưu thám hiểm có cốt truyện hay, nhưng yêu cầu cấu
                      hình lại cực kỳ nhẹ nên chắc chắn phải được xướng tên
                      trong danh sách này. Nếu các bạn là fan của cuốn tiểu
                      thuyết "2 vạn dặm dưới đáy biển" hay ít nhất là cũng thích
                      thể loại tương tự vậy thì các bạn sẽ ưng ý với con game
                      này.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-16276148883661382259834.jpg"
                      alt="1, GAME HAY,GAME NHẸ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Subnautica sẽ đưa các bạn đến một hành tinh lạ, tương tự
                      với Trái Đất nhưng nhiều thứ mới mẻ để khám phá hơn. Hầu
                      hết thời lượng game các bạn sẽ hoạt động chủ yếu ở dưới
                      đại dương, nơi bạn sẽ tập cách sinh tồn, tìm kiếm thức ăn,
                      nước uống, trốn tránh và phản kháng lại các loài quái vật
                      khổng lồ... cũng như là xây dựng một trạm nghiên cứu của
                      riêng mình. Subnautica là một tựa game thế giới mở có đồ
                      họa được xây dựng theo phong cách khá rực rỡ và bắt mắt
                      nhưng lại chỉ yêu cầu một cấu hình cực kỳ khiêm tốn. RAM
                      4GB, CPU 2 nhân/4 luồng, GPU Intel HD 4600, có thể nói đây
                      là một cấu hình PC rất căn bản mà rất nhiều bạn đang sở
                      hữu. Một tựa <strong>game hay</strong> đã được nhiều game
                      thủ trên thế giới chứng nhận mà cấu hình yêu cầu lại rất
                      "thơm" nữa nên mình nghĩ những bạn nào thích các thể loại
                      phiêu lưu kinh dị nên thử chơi 1 lần.
                    </p>
                    <h5>Devil May Cry 5</h5>
                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: Intel Core i5-4460 / AMD FX-6300 </p>
                    <p>RAM: 8 GB </p>
                    <p>GPU: NVIDIA GTX 760 / AMD R7 260x </p>
                    <p>Ổ cứng: 35 GB</p>
                    <p>
                      Sự trở lại của Dante trong phiên bản mới nhất của series
                      DMC chắc chắn sẽ khiến những fan của tựa game này phải hò
                      reo trong sung sướng. Có thể nhìn qua đồ họa và gameplay
                      của DMC 5, nhiều bạn có bộ PC với cấu hình khiêm tốn sẽ
                      nghẹn ngào vì nghĩ rằng mình sẽ không có cơ hội được trải
                      nghiệm tựa game làm mưa làm gió một thời này. Thế nhưng,
                      anh em cứ an tâm.{" "}
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-1-1627614891395274830336.jpg"
                      alt="2, GAME HAY,GAME NHẸ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Cũng giống như Resident Evil 2 Remake, DMC 5 không hề yêu
                      cầu cấu hình quá cao thì bạn mới có thể chơi được. Bạn chỉ
                      cần 1 CPU 4 nhân/ 4 luồng như Intel Core i5-4460, RAM 8GB
                      và GPU NVIDIA GTX 760 hoặc mạnh hơn là đã có thể quẩy tanh
                      bành và đánh đấm đã tay với những con quỷ trong game rồi.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      DMC 5 không chỉ mang đến những pha hành động mãn nhãn, tựa
                      game còn mang đến đầy đủ những nhân vật cực kỳ ấn tượng,
                      từ gã cà chớn nhưng siêu ngầu Dante đến một Nero đầy nhiệt
                      huyết hay anh chàng phản diện được rất nhiều người yêu quý
                      Vergil … Cốt truyện trong game sẽ cuốn người chơi theo
                      từng nhân vật, để cùng khóc, cùng cười, cùng đắm chìm vào
                      câu chuyện của họ.
                    </p>
                    <p>
                      Trải nghiệm chặt chém của DMC thì không phải bàn, combo
                      cực dài, cực đẹp, nhìn lóa cả mắt. Đồ hoạ thì đỉnh cao, âm
                      thanh ấn tượng, mỗi phát chém đều nghe rất phê. Chất lượng
                      như vậy mà đòi hỏi cấu hình không cao thì thì quả là hời
                      các bạn nhỉ?
                    </p>
                    <h5>Sekiro: Shadow Die Twice</h5>
                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: Intel Core i3-2100 / AMD FX-6300 </p>
                    <p>RAM: 4 GB </p>
                    <p>GPU: NVIDIA GeForce GTX 760 / AMD Radeon HD 7950 </p>
                    <p>Ổ cứng: 25 GB</p>
                    <p>
                      Game từ From Software luôn hành game thủ ra bã nhưng lại
                      vô cùng thân thiện với máy của họ, và Sekiro: Shadow Die
                      Twice chính là ví dụ điển hình. Chuyện trong game là như
                      thế này, một ngày đẹp trời đang yên đang lành thì tự nhiên
                      cái tên Genichiro nhà Ashina tự nhiên gây chuyện, chém
                      luôn cánh tay của bạn và bắt cậu chủ nhỏ của bạn đi. Bạn
                      may mắn sống sót và lên đường đi chém cho hắn một trận, ai
                      cản thì chém người đó, ma quỷ thánh thần gì đó cũng xử
                      tuốt luôn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-2-16276148903381589005832.png"
                      alt="3, GAME HAY,GAME NHẸ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Do tựa game lấy bối cảnh thời kỳ Sengoku (Chiến Quốc) đầy
                      binh biến loạn lạc nên dĩ nhiên nó mang một không khí
                      nhuốm màu u tối. Tuy nhiên cái cách mà From Software hoàn
                      thiện nó và thổi những yếu tố huyền huyễn mang đậm sắc màu
                      dân gian Nhật Bản vào lại khiến người ta mê mẩn. Bạn sẽ
                      choáng ngợp với những khung cảnh đẹp như được in ra từ
                      tranh thủy mặc, nhân vật với tạo hình siêu ấn tượng, chiêu
                      thức không màu mè nhưng vô cùng đẹp mắt… Mà nói vậy thôi
                      chứ <strong>game nhẹ</strong> lắm nhé, chỉ cần card GTX
                      1050 là chơi được, mà GTX 1060 3GB là đủ chiến Max
                      Setting. Phải nói là game được tối ưu hóa cực kỳ tốt luôn.
                      Cái mình thấy chưa thực sự ưng lắm ở tựa game này là đồ
                      họa min với max nhìn cũng chẳng khác nhau nhiều lắm.
                    </p>
                    <h5>World of Tanks</h5>
                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: Tối thiểu 2 nhân hỗ trợ SSE2 </p>
                    <p>RAM: 2 GB </p>
                    <p>GPU: NVIDIA GeForce 8600 / ATI Radeon HD 4550 </p>
                    <p>Ổ cứng: 57 GB</p>
                    <p>
                      Hồi lúc World of Tanks mới ra mắt ở Việt Nam thì nó là một
                      sát thủ phần cứng thật sự. Tuy nhiên đó đã là chuyện của
                      gần chục năm về trước, còn giờ thì bạn có thể cân nó dễ
                      dàng chỉ với mấy con card bình dân. Thậm chí mình có thể
                      chơi Min Setting trên 100FPS với con card đồ cổ GT 730 2GB
                      GDDR3 ở nhà nữa, chẳng qua là chơi vậy đồ họa hơi xấu
                      thôi. Mà để cân được max setting của World of Tanks 60FPS
                      thì bạn cũng chỉ cần đến card cỡ GTX 1060 3GB hay RX 570
                      là đủ rồi.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-3-16276148898361003541332.png"
                      alt="4, GAME HAY,GAME NHẸ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Mà nhẹ thì nhẹ chứ game vẫn cực kỳ đẹp nhé. Ở mức thiết
                      lập trung bình thôi là bạn sẽ thấy được texture, cây cỏ,
                      đồi núi, nhà cửa, hiệu ứng cháy nổ... đều được hoàn thiện
                      tỉ mỉ, xe tăng cũng được chăm chút từng li từng tí. Và tất
                      cả những thứ đó sẽ còn đẹp lung linh hơn nữa khi bạn kéo
                      Max Setting. Ngoài ra game cũng có nhiều map có cảnh sắc
                      cực kỳ nên thơ hữu tình, nhớ có mấy lần mình vì ngắm chim,
                      ngắm bướm, ngắm hoa mà ăn đạn nữa cơ.
                    </p>
                    <h5>DOOM</h5>
                    <p>Cấu hình tối thiểu:</p>
                    <p>CPU: Intel Core i5-2400 / AMD FX-8320 </p>
                    <p>RAM: 8 GB </p>
                    <p>GPU: NVIDIA GTX 670 2GB / AMD Radeon HD 7870 2GB </p>
                    <p>Ổ cứng: 55 GB</p>
                    <p>
                      Đây có thể được cho là phiên bản reboot của tựa game đầu
                      tiên của series DOOM huyền thoại, phiên bản năm 1993 vốn
                      đã rất kinh điển, thì nay bản năm 2016 cũng chất lượng
                      không kém. Bạn sẽ vào vai DOOM guy, một thanh niên đi bộ
                      như đua xe và sẵn sàng đấm thẳng mặt mất kỳ thanh niên nào
                      dám đe dọa đến quê hương mình. Bắn nhau trong một nền nhạc
                      heavy metal cùng đồ họa máu me xịn sò sẽ cho bạn một cảm
                      giác rất là "DOOM". Mà có một điểm mình rất thích ở tựa
                      game này là tuy đồ họa nó khủng thật nhưng cũng tối ưu hóa
                      phần cứng rất tốt nên nó cũng rất nhẹ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/30/photo-4-1627614890847329294410.png"
                      alt="5, GAME HAY,GAME NHẸ,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bạn sẽ chỉ cần một card bình thường cỡ GTX 1650 Super là
                      đã chiến max setting 144FPS khỏe re rồi. Ở mức thiết lập
                      cao nhất thì các hiệu ứng, cháy nổ phải gọi là đẹp đến mê
                      mẩn luôn. Nếu đã là game thủ FPS thì mình nghĩ bạn chắc
                      chắn nên thử qua tựa game này một lần đấy.
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
