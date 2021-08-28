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
"timestamp": '28/08/2021 08:50 AM',
"title": 'Bùng nổ trào lưu NFT, game thủ Việt cần nắm rõ những yếu tố sau đây trước khi "làm giàu"',
"description": 'Các tựa game NFT nghe qua thì có vẻ đơn giản mà kiếm tiền dễ, nhưng chắc chắn điều này chỉ đúng với những ai thật sự hiểu về nó.',
"src": 'https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629689106820390180406.jpg',
"alt": 'GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,GAME NFT,',
"category": 'games',
"date": '28/08/2021',
"time": '08:50 AM',
"link": '/bung-no-trao-luu-nft-game-thu-viet-can-nam-ro-nhung-yeu-to-sau-day-truoc-khi-quyet-tam-lam-giau',
"zcomponent": 'page_20210828085003',
"filepath": './20210828085003-bung-no-trao-luu-nft-game-thu-viet-can-nam-ro-nhung-yeu-to-sau-day-truoc-khi-quyet-tam-lam-giau.js'
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
  'Bùng nổ trào lưu NFT, game thủ Việt cần nắm rõ những yếu tố sau đây trước khi "làm giàu"';
const author = "Mặt Trứng";
const source = "Trí Thức Trẻ";
const timestamp = "28/08/2021 08:50 AM";
const description =
  "Các tựa game NFT nghe qua thì có vẻ đơn giản mà kiếm tiền dễ, nhưng chắc chắn điều này chỉ đúng với những ai thật sự hiểu về nó.";
const link =
  "bung-no-trao-luu-nft-game-thu-viet-can-nam-ro-nhung-yeu-to-sau-day-truoc-khi-quyet-tam-lam-giau";
const tagparam = [
  "GAME",
  "GAME THỦ",
  "TIN TỨC GAME",
  "BÀI VIẾT ĐÁNG CHÚ Ý",
  "GAME NFT",
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

export default function page_20210828085003() {
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
                      Trào lưu các tựa <strong>game</strong> NFT đang bùng nổ,
                      chẳng những ở Việt Nam mà còn tại nhiều nơi trên thế giới.
                      Nghe qua thì có vẻ đơn giản, khi chỉ cần cày cuốc chăm
                      chỉ, các khoản thu nhập của bạn sẽ tự động tăng lên theo
                      giá coin. Tuy nhiên, nếu cứ giữ suy nghĩ này để chơi{" "}
                      <strong>game NFT</strong>, chắc chắn chẳng mấy người có
                      thể sinh ra lợi nhuận cao, thậm chí là thua lỗ nữa. Về cơ
                      bản, hãy nắm vững một số kiến thức dưới đây trước khi thật
                      sự đưa ra quyết định dấn thân vào cơn sốt game NFT của
                      mình.
                    </p>
                    <h5>
                      <strong>Game</strong> NFT là một phi vụ đầu tư, không phải
                      chơi vui có thưởng
                    </h5>

                    <p>
                      Nếu vẫn còn giữ chơi NFT để vui mà vẫn có lợi nhuận thì
                      chắc chắn bạn đã nhầm. Các tựa <strong>game</strong> NFT
                      có thể không mang quá nhiều tính cạnh tranh giữa các người
                      chơi với nhau, nhưng tốt nhất, hãy xem đây là một phi vụ
                      đầu tư thì chuẩn xác hơn là việc bạn đang giải trí bằng
                      một tựa game.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629689106820390180406.jpg"
                      alt="1, GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,GAME NFT,"
                      note=""
                    />

                    <p>
                      Về cơ bản, bạn có thể chơi <strong>game</strong> NFT một
                      cách hoàn toàn miễn phí (với một số trò). Nhưng câu hỏi
                      đặt ra là trong trường hợp như vậy, cơ hội để bạn kiếm
                      được lợi nhuận liệu có cao? Chắc chắn là không rồi, vì nếu
                      thế thì chắc nhiều người bỏ nghề để chơi NFT quá. Đó cũng
                      là lý do mà không ít <strong>game thủ</strong> thậm chí
                      còn phải bỏ vốn ban đầu để tự trang bị, nâng cấp nhân vật
                      của mình nhằm đạt hiệu suất cao nhất trong các{" "}
                      <strong>game NFT</strong>. Và khi đã bỏ vốn, khả năng lỗ
                      và lời đều chưa thể nói trước. Thế nên, hãy xác định nếu
                      muốn nghiêm túc với game NFT, hãy coi nó là một phi vụ đầu
                      tư sinh lời.
                    </p>
                    <h5>Có kiến thức về thị trường tiền ảo</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/23/photo-1-16296892754141902923588.jpg"
                      alt="2, GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,GAME NFT,"
                      note=""
                    />

                    <p>
                      Đa số các tựa <strong>game</strong> NFT đều sẽ thưởng cho
                      người chơi bằng các đồng coin - thứ sau đó có thể giao
                      dịch tại các sàn tiền ảo trên thế giới. Tuy nhiên, đừng
                      thấy rằng có nhiều coin là giàu. Sẽ chẳng nghĩa lý gì nếu
                      như đồng coin của bạn không có tính thanh khoản, hoặc nếu
                      có thì giá trị rất thấp. Vì thế, tìm hiểu thị trường tiền
                      ảo trước khi lựa chọn <strong>game NFT</strong> cũng là
                      một yêu cầu bắt buộc.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      {" "}
                      Trên thế giới đã từng có không ít những đồng tiền ảo được
                      thổi giá trong thời gian đầu, sau đó cắm đáy và không bao
                      giờ có khả năng gượng dậy, thậm chí còn bị nhiều sàn xóa
                      khỏi danh sách niêm yết của mình. Đừng lặp lại sai lầm đấy
                      nhé, chỉ tốn tiền đầu tư và thời gian cày cuốc thôi.
                    </p>
                    <h5>
                      Lựa chọn đúng tựa <strong>game</strong> NFT
                    </h5>
                    <p>
                      Việc chọn đúng <strong>game</strong> để chơi cũng là một
                      điều tối quan trọng. Nhiều người có thể thấy thành công
                      của Axie Infinity và giờ bắt đầu đổ tiền vào tựa game này,
                      nhưng ở thời điểm hiện tại, mọi thứ có lẽ đã là quá muộn,
                      nhất là khi đồng AXS đang có giá trị siêu cao, đồng nghĩa
                      với việc vốn đầu tư của bạn bỏ ra cũng nhiều lên trong khi
                      giá trị đồng SLP (coin được trả thưởng trong Axie) thì lại
                      đang tụt dốc không phanh.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/23/photo-1-1629689463831999623318.jpg"
                      alt="3, GAME,GAME THỦ,TIN TỨC GAME,BÀI VIẾT ĐÁNG CHÚ Ý,GAME NFT,"
                      note=""
                    />

                    <p>
                      Thế nên, nếu muốn tìm chơi một tựa <strong>game</strong>{" "}
                      NFT phù hợp và có khả năng sinh lời ở thời điểm hiện tại,
                      tốt nhất bạn nên nghiên cứu thật kỹ đã và đừng nên cố chạy
                      theo những tên tuổi lớn thành danh vì chưa chắc, có tiếng
                      là đã có miếng đâu.
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
