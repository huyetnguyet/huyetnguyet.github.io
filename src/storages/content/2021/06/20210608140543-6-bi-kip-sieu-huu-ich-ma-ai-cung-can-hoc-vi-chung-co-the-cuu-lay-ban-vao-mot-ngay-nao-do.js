import React from "react";
import "components/page.css";
import { AdsHorizontal, AdsVertical } from "components/adsMethods";
import { RandomFeature } from "components/methods";

import { Content, ContentImage, FacebookShareButton } from "components/content";

import { Helmet } from "react-helmet";

/* ---------------------------------------------------------------- */

/*

 {
"timestamp": 08/06/2021 02:05 PM",
"title": 6 bí kíp siêu hữu ích mà ai cũng cần học, vì chúng có thể cứu lấy bạn vào một ngày nào đó",
"description": Bạn có thể rơi vào những hoàn cảnh hiểm nghèo, hoặc đơn giản là các tình huống khiến một ngày trở nên khó khăn hơn. Làm thế nào lúc đó nhỉ?",
"src": https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-1623131702795545224846.jpg",
"alt": Bi Kip, Chua Chay, Tinh Huong Xau Nhat, ",
"category": news",
"date": 08/06/2021",
"time": 02:05 PM",
"link": "/6-bi-kip-sieu-huu-ich-ma-ai-cung-can-hoc-vi-chung-co-the-cuu-lay-ban-vao-mot-ngay-nao-do",
"zcomponent": page_20210608140543",
"filepath": ./20210608140543-6-bi-kip-sieu-huu-ich-ma-ai-cung-can-hoc-vi-chung-co-the-cuu-lay-ban-vao-mot-ngay-nao-do.js"
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
  "6 bí kíp siêu hữu ích mà ai cũng cần học, vì chúng có thể cứu lấy bạn vào một ngày nào đó";
const author = "J.D";
const source = "Tri Thức Trẻ";
const timestamp = "08/06/2021 02:05 PM";
const description =
  "Bạn có thể rơi vào những hoàn cảnh hiểm nghèo, hoặc đơn giản là các tình huống khiến một ngày trở nên khó khăn hơn. Làm thế nào lúc đó nhỉ?";
const link =
  "6-bi-kip-sieu-huu-ich-ma-ai-cung-can-hoc-vi-chung-co-the-cuu-lay-ban-vao-mot-ngay-nao-do";
const tagparam = ["bi-kip", "chua-chay", "tinh-huong-xau-nhat"];
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

export default function page_20210608140543() {
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
            <AdsHorizontal />
            <div className="content">
              <div className="contentContainer">
                <p className="description">{description}</p>
                <div className="contentBody">
                  <p>
                    Kiến thức là sức mạnh, và sức mạnh ấy có thể giúp bạn thoát
                    khỏi nhiều rắc rối trong cuộc sống. Trên thực tế thì chúng
                    ta chẳng ai có thể biết mình sẽ rơi vào tình huống như thế
                    nào, dù có ở nhà cả ngày đi chăng nữa.
                  </p>
                  <p>
                    Bởi vậy, hãy trang bị cho mình càng nhiều kiến thức càng
                    tốt, đặc biệt là những bí kíp sinh tồn giống như danh sách
                    dưới đây.
                  </p>
                  <p></p>
                  <ContentImage
                    src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-1623131702795545224846.jpg"
                    alt="Bi Kip, Chua Chay, Tinh Huong Xau Nhat, "
                    note="Có nhiều cách để lấy được nước khi bị lạc ngoài tự nhiên.
                    Nếu may mắn, bạn có thể tìm được một dòng suối nào đó. Tuy
                    nhiên, một trong những cách an toàn nhất là thu lấy sương."
                  />
                  <p>
                    Đầu tiên, hãy tìm đến một khu vực có nhiều sương đọng lại,
                    và thời điểm phù hợp nhất để thu thấp sương là vào buổi
                    sáng.
                  </p>
                  <p>
                    Hãy chuẩn bị một tấm vải sạch, thấm nước tốt (có thể là
                    chính chiếc áo của bạn). Dùng vải lau từng ngọn cỏ, sau đó
                    vắt nó vào một chiếc bình chứa.
                  </p>
                  <p>
                    Nhìn chung thì nước thu được tương đối an toàn để uống,
                    nhưng tốt nhất là hãy đun sôi nó trước khi sử dụng để không
                    gặp rắc rối sau đó.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231316580982085610669.jpg"
                      alt="Bi Kip, Chua Chay, Tinh Huong Xau Nhat, "
                      note="Thay vì đổ nước, hãy dùng vung (nắp) đậy chiếc chảo lại"
                    />
                  </p>
                  <p>
                    Lơ đãng một chút khi nấu bếp có thể khiến bạn phải trả giá
                    bằng một chiếc chảo cháy đen. Nhưng bạn biết không, cháy đen
                    như vậy đôi khi cũng chưa phải "đen" nhất, mà có lúc nó còn
                    bốc cháy thật sự, gây nguy cơ hỏa hoạn lớn nữa.
                  </p>
                  <p>
                    Những lúc chiếc chảo bất thần bốc cháy, việc bạn nên làm
                    không phải là đổ nước vào. Bởi lẽ, nước có nhiệt độ sôi thấp
                    hơn dầu và mỡ, có thể gây nổ và khiến bạn bị thương. Thay
                    vào đó, hãy dập lửa bằng bình cứu hỏa hoặc dùng một chiếc
                    vung/nắp đậy chiếc chảo lại. Nhớ là tắt bếp trước đã đấy
                    nhé.
                  </p>

                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-1-16231316595011167042071.jpg"
                      alt="Bi Kip, Chua Chay, Tinh Huong Xau Nhat, "
                      note="Đừng mở cửa sổ"
                    />
                  </p>
                  <p>
                    Bình thường thì cũng không phải vấn đề to lớn lắm. Nhưng giả
                    sử xe chết máy khi bạn ở xa nhà hoặc giữa lúc tối trời, bạn
                    sẽ phải làm gì?
                  </p>
                  <p>
                    Đầu tiên là kiểm tra dịch vụ kéo xe khẩn cấp - họ sẽ tới và
                    đưa xe của bạn (kèm bạn nữa) về nơi sửa chữa gần nhất.
                  </p>
                  <p>
                    Nếu lúc đó đã quá muộn và không còn dịch vụ này, hãy chuẩn
                    bị tinh thần ngủ qua đêm trong ô tô. Ghi nhớ: Hãy khoá cửa
                    và kéo cửa sổ lên - một là để kẻ gian không tiếp cận, phần
                    khác là để hơi lạnh không tràn vào.
                  </p>
                  <p>
                    Chờ đến lúc trời sáng, bạn có thể vẫy gọi sự trợ giúp của
                    các tài xế khác, hoặc dùng điện thoại gọi dịch vụ đến giải
                    cứu. Trong tình huống xấu nhất bạn có thể phải đi bộ, nên dù
                    thế nào cũng nên đợi đến lúc trời sáng.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-2-1623131659552672272459.jpg"
                      alt="Bi Kip, Chua Chay, Tinh Huong Xau Nhat, "
                      note="Đi câu mà quên mang cần?"
                    />
                  </p>
                  <p>
                    Đừng để chuyến dã ngoại bị phá hỏng, vì bạn có thể tạo ra
                    một cái bẫy chỉ bằng chai nhựa.
                  </p>
                  <p>
                    Đầu tiên, cắt bỏ phần đầu chai, rồi đặt nó úp ngược vào phần
                    thân giống như hình. Tiếp theo là buộc dây, rồi đặt mồi và
                    đá sỏi vào trong để nó dễ chìm.
                  </p>
                  <p>
                    Cuối cùng là thả chiếc chai xuống nước, sao cho nó chìm đến
                    tận đáy. Đợi khoảng vài giờ và kéo lên xem có chú cá nào lọt
                    bẫy hay không nhé.
                  </p>
                  <p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/6/8/photo-3-1623131659589150654426.jpg"
                      alt="Bi Kip, Chua Chay, Tinh Huong Xau Nhat, "
                      note="Ai chẳng có lúc rơi đồ ăn lên áo phải không. Bình thường
                    cũng không sao, nhưng nếu đó là một chiếc áo đắt tiền thì
                    quả thật là... toang."
                    />
                  </p>
                  <p>
                    Bình tĩnh đã, có cách để giải quyết câu chuyện này. Đầu
                    tiên, hãy giặt qua áo bằng nước ngay lập tức. Tiếp theo, sử
                    dụng một số chất phụ trợ như muối, baking soda, bột talc
                    hoặc bột ngô để rắc lên vết ố. Để nguyên trong 15 phút rồi
                    giặt lại bằng nước sạch và xem kết quả nhé.
                  </p>
                  <p>Nguồn: BS, Vt.co</p>
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
