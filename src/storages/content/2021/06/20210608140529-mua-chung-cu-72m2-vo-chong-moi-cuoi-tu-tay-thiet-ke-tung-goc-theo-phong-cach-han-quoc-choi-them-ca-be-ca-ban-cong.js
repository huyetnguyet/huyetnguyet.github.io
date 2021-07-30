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
"title": Mua chung cư 72m2, vợ chồng mới cưới tự tay thiết kế từng góc theo phong cách Hàn Quốc, chơi thêm cả bể cá ban công",
"description": Vì diện tích căn hộ không được rộng nên vợ chồng chị Nguyệt Út ưu tiên chọn tông màu nâu trắng để nhà sáng sủa và tạo cảm giác rộng rãi hơn.",
"src": https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18650845737681714566265132333997200191415436n-162204531648783806752.jpeg",
"alt": Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, ",
"category": life",
"date": 08/06/2021",
"time": 02:05 PM",
"link": "/mua-chung-cu-72m2-vo-chong-moi-cuoi-tu-tay-thiet-ke-tung-goc-theo-phong-cach-han-quoc-choi-them-ca-be-ca-ban-cong",
"zcomponent": page_20210608140529",
"filepath": ./20210608140529-mua-chung-cu-72m2-vo-chong-moi-cuoi-tu-tay-thiet-ke-tung-goc-theo-phong-cach-han-quoc-choi-them-ca-be-ca-ban-cong.js"
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "life";
const categoryLink = "/life";
const title =
  "Mua chung cư 72m2, vợ chồng mới cưới tự tay thiết kế từng góc theo phong cách Hàn Quốc, chơi thêm cả bể cá ban công";
const author = "HÀ THANH THUỶ,";
const source = "Trí Thức Trẻ";
const timestamp = "08/06/2021 02:05 PM";
const description =
  "Vì diện tích căn hộ không được rộng nên vợ chồng chị Nguyệt Út ưu tiên chọn tông màu nâu trắng để nhà sáng sủa và tạo cảm giác rộng rãi hơn.";
const link =
  "mua-chung-cu-72m2-vo-chong-moi-cuoi-tu-tay-thiet-ke-tung-goc-theo-phong-cach-han-quoc-choi-them-ca-be-ca-ban-cong";
const tagparam = [
  "hai-vo-chong",
  "do-noi-that",
  "tu-thiet-ke",
  "be-ca",
  "house-n-home",
  "design-nha",
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

export default function page_20210608140529() {
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
                    Chị Nguyệt Út (27 tuổi) hiện đang là nhân viên ngân hàng.
                    Hai vợ chồng chị mới cưới được một thời gian, cùng nhau cố
                    gắng, tiết kiệm và mua được 1 căn chung cư hiện tại làm tổ
                    ấm riêng. Căn hộ toạ lạc tại Rivera Park 69 Vũ Trọng Phụng,
                    Hà Nội. Diện tích là 72m2 với 2 phòng ngủ, 2 nhà vệ sinh, 1
                    ban công và 1 logia phơi quần áo. Vì muốn nhà theo phong
                    cách của mình nên 2 vợ chồng chị không thuê thiết kế mà cùng
                    nhau lên ý tưởng, lựa chọn từng mẫu mã kiểu dáng nội thất.
                  </p>
                  <p>
                    Vì diện tích nhà không được rộng nên chị ưu tiên tông trắng
                    để nhà sáng sủa và tạo cảm giác rộng rãi hơn. Chị cũng tối
                    ưu đồ đạc để nhà được thông thoáng và gọn gàng hơn. Thời
                    gian từ lúc lên ý tưởng đến hoàn thiện thi công chỉ trong
                    vòng 20-25 ngày. Thi công xong xuôi, chị Nguyệt Út tự tay
                    mua đồ decor và trang trí cho ngôi nhà của mình. Góc chị mê
                    nhất là chỗ kệ tủ ly, chị vừa bỏ được nhiều đồ ở tủ như ly,
                    cốc, nến thơm phía trên bề mặt kệ lại vừa trang trí được.
                    Góc ban công có bể cá cũng là góc chồng chị mê nhất. Bể cá
                    để trên tủ gỗ, bàn trà và ghế cói tạo cảm giác gần gũi, yên
                    bình. Trong tương lai, hai vợ chồng chị cũng muốn đổi sang
                    nhà rộng hơn để chồng chị được thoả sức đam mê nuôi cá.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18868532937681704932932768124500632877310157n-16220453173631517396134.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note="Không gian từ ban công nhìn vào"
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18809657437681708566265733614533597430082050n-16220453169362010687122.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note="Đồ gỗ theo tông màu Hàn Quốc"
                  />
                  <p>
                    Chị chia sẻ: "Với quan điểm của mình thì nhà luôn là nơi để
                    về, nên mình phải tạo cho căn nhà sự yên bình, ấm cúng để
                    lúc nào cũng muốn quay về. Tan tầm chạy về sớm, cắm lọ hoa
                    yêu thích, nấu cơm tối 2 vợ chồng cùng ăn, ăn xong cùng dọn
                    dẹp rồi xem phim. Cảm giác rất bình yên và hạnh phúc". Kỉ
                    niệm nhớ nhất trong lúc làm nhà là những hôm hai vợ chồng
                    chị phải dọn dẹp đến 1-2 giờ sáng. Mặc dù đã thuê đội vệ
                    sinh công nghiệp sạch sẽ hết rồi và chỉ cần dọn đồ của mình
                    vào, nhưng vẫn có quá nhiều việc phải làm xong thì mới yên
                    tâm ở được.
                  </p>
                  <p>
                    Vì nhà chị lựa chọn kỹ càng từng chút một nên khi làm việc
                    với bên thi công cũng không có gì quá khó khăn. Chị có tham
                    khảo trên mạng về nhà cửa và sưu tầm thiết kế, đồ nội thất.
                    Đồ decor chị phải tìm khắp nơi, đặt hàng từ Nam ra Bắc để
                    lựa chọn được đúng gu của mình. Mặc dù mệt nhưng được tự
                    thiết kế lên ý tưởng cho ngôi nhà của mình là điều đáng nhất
                    đối với hai vợ chồng chị.
                  </p>
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18653425437681706299599293306160203093691638n-1622045316577206070103.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18657263437681709766265612084324982621727744n-16220453166361476293163.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18848701137681707199599204110757593070616534n-1622045317021306671189.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18650845737681714566265132333997200191415436n-162204531648783806752.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18655163237682046532898606749780032155865957n-16220453165851505865443.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18791172437681712999598629049073079259137337n-1622045316866184760746.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/5/26/1888507203768171073293218335059094143080424n-1622045447601953598995.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/5/26/18792887737681712366265355190790853998424817n-1622045316926585667003.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <ContentImage
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/5/26/18688457237681715499598374888717787803160392n-162204531671999574515.jpeg"
                    alt="Hai Vo Chong, Do Noi That, Tu Thiet Ke, Be Ca, House N Home, Design Nha, "
                    note=""
                  />
                  <p>Nguồn: NVCC, Group Nghiện Nhà</p>
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
