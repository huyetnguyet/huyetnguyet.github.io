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
"timestamp": '29/07/2021 04:21 PM',
"title": 'Những con quái vật rắn nổi tiếng trong thần thoại Hy Lạp',
"description": 'Rắn thường được miêu tả với tư cách là các vị thần hoặc quái vật trong thần thoại của người Hy Lạp.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-1626771905962962558871.jpg',
"alt": 'THẦN THOẠI,QUÁI VẬT,HY LẠP,HYDRA,MEDUSA,',
"category": 'news',
"date": '29/07/2021',
"time": '04:21 PM',
"link": '/nhung-con-quai-vat-ran-noi-tieng-trong-than-thoai-hy-lap',
"zcomponent": 'page_20210729162122',
"filepath": './20210729162122-nhung-con-quai-vat-ran-noi-tieng-trong-than-thoai-hy-lap.js'
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
const title = "Những con quái vật rắn nổi tiếng trong thần thoại Hy Lạp";
const author = "DS";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:21 PM";
const description =
  "Rắn thường được miêu tả với tư cách là các vị thần hoặc quái vật trong thần thoại của người Hy Lạp.";
const link = "nhung-con-quai-vat-ran-noi-tieng-trong-than-thoai-hy-lap";
const tagparam = ["THẦN THOẠI", "QUÁI VẬT", "HY LẠP", "HYDRA", "MEDUSA"];
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

export default function page_20210729162122() {
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
                    <h5>1. Hydra</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-1626771905962962558871.jpg"
                      alt="1, THẦN THOẠI,QUÁI VẬT,HY LẠP,HYDRA,MEDUSA,"
                      note=""
                    />
                    <p>
                      Con mãng xà <strong>Hydra</strong> có tên đầy đủ là
                      Lernaen Hydra, có nghĩa là "Hydra vùng Lernaean". Vùng đầm
                      lầy thuộc Lernaean chính là nơi trú ngụ của nữ quái này.
                      Do đó, nhiều nơi gọi nó với tên viết tắt là Hydra.
                    </p>
                    <p>
                      Thêo tiểu sử, <strong>Hydra</strong> là con gái của{" "}
                      <strong>quái vật</strong> biển trăm đầu trăm đuôi Typhon
                      và "nữ chúa của muôn loài quái vật" Ekhidna. Nhờ việc là
                      con của một cặp đôi quái vật hủy diệt, Hydra cũng hội tụ
                      những đặc điểm sức mạnh đáng sợ từ trong ra ngoài.
                    </p>
                    <p>
                      Tương truyền, <strong>Hydra</strong> sống trong lòng một
                      hồ nước ở <strong>Hy Lạp</strong> mà đáy hồ thông với địa
                      ngục. Máu của nó có chứa chất độc và hơi thở của nó có mùi
                      hôi đến mức có thể làm chết người. Theo truyền thuyết,
                      việc đánh bại Hydra là điều không thể vì nếu như chặt mất
                      một trong những chiếc đầu của nó thì có nghĩa là sẽ có hai
                      chiếc đầu khác mọc lên thay thế. Trong 9 cái đầu của nó,
                      lại có 1 chiếc đầu bất tử, bất hoại, không thể tiêu diệt
                      bằng bất cứ thứ vũ khí nào.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/20/photo-1-1626771927689481426502.jpg"
                      alt="2, THẦN THOẠI,QUÁI VẬT,HY LẠP,HYDRA,MEDUSA,"
                      note=""
                    />
                    <p>
                      Nữ thần Hera nuôi dưỡng <strong>Hydra</strong> để tiêu
                      diệt người hùng Heracles - đứa con riêng của thần Zeus. Để
                      hoàn thành chiến công này, Heracles dùng mưu kế mỗi lần
                      chặt đầu xong là châm đuốc vào phần cổ vừa bị chặt. Cuối
                      cùng, Hydra đã bị tiêu diệt không còn sót cái đầu nào.
                      Trận chiến của Herecles còn có sự trợ giúp đắc lực của
                      người cháu trai Iolaus, một người hùng của thành Thebes,
                      người chuyên cưỡi xe ngựa rong ruổi cùng các cuộc chiến
                      của Hercules.
                    </p>
                    <p>
                      Thương tiếc con <strong>quái vật</strong> mà mình nuôi
                      dưỡng, nữ thần Hera bèn mang xác của{" "}
                      <strong>Hydra</strong> lên trời. Đây là cách giải thích
                      của người <strong>Hy Lạp</strong> xưa về nguồn gốc chòm
                      sao Hydra (Trường Xà), chòm sao lớn nhất trên bầu trời.
                      Một vệ tinh tự nhiên của sao Diêm Vương cũng được đặt tên
                      là Hydra.
                    </p>
                    <h5>2. Medusa</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-1626772556815936980374.jpg"
                      alt="3, THẦN THOẠI,QUÁI VẬT,HY LẠP,HYDRA,MEDUSA,"
                      note=""
                    />
                    <p>
                      Ngày xửa ngày xưa, <strong>Medusa</strong> là một thiếu nữ
                      có nhan sắc diễm lệ và xinh đẹp. Nàng rất mực tôn kính nữ
                      thần Athena và lọt vào mắt xanh của vị thần biển cả
                      Poseidon. Dù nàng đã từ chối nhưng vị thần vẫn quyết theo
                      đuổi và điều này khiến nàng chạy vào đền thờ của nữ thần
                      Athena với hi vọng được che chở. Nhưng đáng buồn là nữ
                      thần làm ngơ, để mặc cho Medusa bị Poseidon cưỡng bức (có
                      dị bản lại kể nàng đáp lại Poseidon và hai người đã ân ái
                      trong đền thờ nữ thần Athena).
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Vì tức giận trước hành vi làm vấy bẩn đền thờ của mình, nữ
                      thần Athena đã trừng phạt <strong>Medusa</strong> thay vì
                      Poseidon. Thần biến Medusa thành hình dạng gớm ghiếc với
                      mái tóc rắn, tay làm bằng đồng với móng sắc hơn dao. Kể từ
                      đó Medusa trở thành nữ quỷ khủng khiếp, chuyên đi làm hại
                      người, nhưng tuyệt nhiên không đe dọa đến những người phụ
                      nữ.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/7/20/photo-1-1626772716901917599009.jpg"
                      alt="4, THẦN THOẠI,QUÁI VẬT,HY LẠP,HYDRA,MEDUSA,"
                      note=""
                    />
                    <p>
                      Một dị bản khác lại kể rằng, ban đầu{" "}
                      <strong>Medusa</strong> là một cô gái vô cùng xinh đẹp với
                      mái tóc dài óng ả. Vì bất kính với Athena, nàng bị nữ thần
                      biến mái tóc của mình thành rắn và khiến bất cứ sinh vật
                      nào Medusa nhìn thấy bị hoá thành đá.
                    </p>
                    <p>
                      <strong>Medusa</strong> còn xuất hiện trong truyền thuyết
                      về người anh hùng Perseus khi chàng bị giao phải đi giết
                      nữ <strong>quái vật</strong> này. Nữ thần Athena đã trao
                      cho chàng một tấm khiên bảo vệ. Khi giao chiến với Medusa,
                      Perseus chỉ nhìn vào hình ảnh phản chiếu của Medusa và nhờ
                      đó cắt được đầu quái vật. Kể cả sau khi đã chết, cái đầu
                      của Medusa vẫn còn ma thuật hóa đá. Người hùng Perseus đã
                      dùng cái đầu của Medusa để trừng phạt những kẻ thù của
                      chàng.
                    </p>
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
