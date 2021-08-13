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
"timestamp": '11/08/2021 10:58 AM',
"title": 'Tổng hợp loạt lùm xùm để đời của Lê Bống, từ những lần bị ném đá vô lý cho tới vô số hình ảnh phản cảm khó bào chữa',
"description": 'Kể ra thì Lê Bống cũng vướng vào không ít những rắc rối kể từ khi ra mắt thì phải.',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-16284105172572014784813.jpeg',
"alt": 'HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,',
"category": 'images',
"date": '11/08/2021',
"time": '10:58 AM',
"link": '/tong-hop-loat-lum-xum-de-doi-cua-le-bong-tu-nhung-lan-bi-nem-da-vo-ly-cho-toi-vo-so-hinh-anh-phan-cam-kho-bao-chua',
"zcomponent": 'page_20210811105844',
"filepath": './20210811105844-tong-hop-loat-lum-xum-de-doi-cua-le-bong-tu-nhung-lan-bi-nem-da-vo-ly-cho-toi-vo-so-hinh-anh-phan-cam-kho-bao-chua.js'
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
  "Tổng hợp loạt lùm xùm để đời của Lê Bống, từ những lần bị ném đá vô lý cho tới vô số hình ảnh phản cảm khó bào chữa";
const author = "Mặt Trứng";
const source = "Pháp luật và bạn đọc";
const timestamp = "11/08/2021 10:58 AM";
const description =
  "Kể ra thì Lê Bống cũng vướng vào không ít những rắc rối kể từ khi ra mắt thì phải.";
const link =
  "tong-hop-loat-lum-xum-de-doi-cua-le-bong-tu-nhung-lan-bi-nem-da-vo-ly-cho-toi-vo-so-hinh-anh-phan-cam-kho-bao-chua";
const tagparam = ["HOT GIRL", "GÁI XINH", "LÊ BỐNG", "CỘNG ĐỒNG MẠNG"];
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

export default function page_20210811105844() {
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
                      Nổi tiếng từ khá lâu trước đây với câu chuyện lột xác từ
                      vịt bầu thành thiên nga của mình, thế nhưng phải tới giai
                      đoạn gần đây, cái tên <strong>Lê Bống</strong> mới thật sự
                      tạo được sự chú ý, quan tâm mạnh mẽ từ phía{" "}
                      <strong>cộng đồng mạng</strong>. Tuy nhiên, chẳng biết nên
                      vui hay buồn cho cô nàng <strong>hot girl</strong> này,
                      khi mà sự nổi tiếng lại bắt nguồn từ vô số những lùm xùm,
                      scandal không đáng có, thậm chí là tới mức bị ném đá gay
                      gắt của Lê Bống. Cùng điểm lại những vụ việc ồn ào của
                      nàng hot gymer trong suốt thời gian qua nhé.
                    </p>
                    <h5>
                      Bắt đầu với trang phục Pikachu bó sát khi tham gia
                      gameshow
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-16284105172572014784813.jpeg"
                      alt="1, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Đây có lẽ là điểm mở đầu cho một chuỗi những scandal, lùm
                      xùm sau đó của <strong>Lê Bống</strong>. Không ai có thể
                      phủ nhận nàng <strong>hot girl</strong> rất gợi cảm với số
                      đo ba vòng 96-60-96, thế nhưng bộ đồ bó sát này khiến Lê
                      Bống nhận phải nhiều phản ứng trái chiều khi lên sóng
                      truyền hình. Dù cho cũng được rất nhiều người bênh vực,
                      bản thân cũng lên tiếng giải thích nhưng không vì vậy mà
                      những chỉ trích có dấu hiệu dừng lại.
                    </p>
                    <h5>Tạo dáng kém duyên ở chùa</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-16284106050781288223041.jpg"
                      alt="2, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Lần này thì không có nhiều lời bào chữa cho{" "}
                      <strong>Lê Bống</strong>, khi việc nàng{" "}
                      <strong>hot girl</strong> tạo dáng với tư thế chân cao, để
                      lộ những đường cắt xẻ từ bộ váy đã khiến nhiều người phải
                      chỉ trích.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-1628410670881687050039.jpeg"
                      alt="3, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bên cạnh đó, bộ ảnh mặc áo dài cưỡi ngựa của cô nàng cũng
                      bị cho là không phù hợp với bối cảnh, khá phản cảm.
                    </p>
                    <h5>Khoe dáng, thả hai tay khi đạp xe</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-1628410737932109735559.jpg"
                      alt="4, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-1628410832952786772239.jpg"
                      alt="5, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-16284108039572069955286.gif"
                      alt="6, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Đây cũng là một trong những ồn ào gần đây của{" "}
                      <strong>Lê Bống</strong>. Diện trang phục bó sắt, khoe
                      trọn vòng ba của mình khiến cho nhiều người thậm chí còn
                      thừa nhận cảm thấy xấu hổ, thế nhưng Lê Bống tiếp tục
                      khiến dân tình bất bình hơn khi còn khoe hẳn clip thả hai
                      tay đầy mạo hiểm trong lúc đạp xe của mình. Ngoài ra, màn
                      khoe vòng ba rõ ràng ngay giữa hồ Tây cũng khiến cô nàng
                      nhận phải vô số chỉ trích.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>Liên tục làm các clip "uốn lưỡi"</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-16284110034171847381471.png"
                      alt="7, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Nghe qua thì có vẻ vô lý, nhưng đây lại là điều cũng khiến
                      cho <strong>Lê Bống</strong> bị netizen chỉ trích. Cụ thể,
                      sau khi bấm khuyên lưỡi, nàng <strong>hot girl</strong> có
                      vẻ quá phấn khích khi trong các clip đăng tải lên sau đó,
                      cô nàng liên tục có những hành động uốn lưỡi khoe khuyên.
                      Câu chuyện khá bình thường, nhưng có lẽ vì nhân vật chính
                      là Lê Bống nên tất nhiên, vẫn có vô số gạch đá được hướng
                      tới cô nàng.
                    </p>
                    <h5>Thiếu kiến thức khi lên sóng truyền hình</h5>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/8/photo-1-16284111198102143972568.jpg"
                      alt="8, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Cụ thể, với phát biểu có phần hơi lúng túng và sai thuật
                      ngữ cơ bản khi được hỏi về Pháp - đội tuyển mà cô nàng cổ
                      vũ, <strong>Lê Bống</strong> đã khiến cho nhiều người cảm
                      thấy không hề thuyết phục chút nào. Đoạn clip cũng nhanh
                      chóng trở nên viral và được chia sẻ một cách chóng mặt
                      trên nhiều diễn đàn. Và lại một lần nữa, Lê Bống lại trở
                      thành chủ đề gây tranh cãi khi tham gia một gameshow.
                    </p>
                    <h5>Ồn ào lộ clip nóng</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-1628411090494125918809.jpeg"
                      alt="9, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Gần đây nhất, chính nghi án lộ clip nóng đã khiến cho cô
                      nàng <strong>Lê Bống</strong> phải đích thân lên tiếng
                      đính chính. Sau một thời gian, đa số đều cho rằng đây là
                      tin đồn thất thiệt nhưng quả thật, dù có vậy thì cái tên
                      Lê Bống cũng đã trở thành từ khóa tìm kiếm hot nhất MXH
                      trong suốt hai ngày hôm ấy.
                    </p>

                    <p>
                      Và còn vô số những lần <strong>Lê Bống</strong> bị chỉ
                      trích về trang phục quá gợi cảm
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-1628411224756954071926.jpg"
                      alt="10, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-1628411230652635624365.jpg"
                      alt="11, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-16284112438261523909718.png"
                      alt="12, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/8/photo-1-16284112687812091115427.jpg"
                      alt="13, HOT GIRL,GÁI XINH,LÊ BỐNG,CỘNG ĐỒNG MẠNG,"
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
