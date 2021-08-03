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
"timestamp": '29/07/2021 04:22 PM',
"title": 'Mua căn hộ 58m2, vợ chồng trẻ tự thiết kế siêu ưng nhưng nể nhất là chi phí siêu "hạt dẻ"',
"description": 'Để tiết kiệm, vợ chồng chị Dung không thuê kiến trúc sư mà tự mày mò lên ý tưởng cho từng góc trong nhà.',
"src": 'https://kenh14cdn.com/zoom/90_60/203336854389633024/2021/7/27/photo1627382400143-1627382400338253477531.jpg',
"alt": 'Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,',
"category": 'life',
"date": '29/07/2021',
"time": '04:22 PM',
"link": '/mua-can-ho-58m2-vo-chong-tre-tu-thiet-ke-sieu-ung-nhung-ne-nhat-la-chi-phi-sieu-hat-de',
"zcomponent": 'page_20210729162241',
"filepath": './20210729162241-mua-can-ho-58m2-vo-chong-tre-tu-thiet-ke-sieu-ung-nhung-ne-nhat-la-chi-phi-sieu-hat-de.js'
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
  'Mua căn hộ 58m2, vợ chồng trẻ tự thiết kế siêu ưng nhưng nể nhất là chi phí siêu "hạt dẻ"';
const author = "HÀ BÍCH NGỌC,";
const source = "Trí Thức Trẻ";
const timestamp = "29/07/2021 04:22 PM";
const description =
  "Để tiết kiệm, vợ chồng chị Dung không thuê kiến trúc sư mà tự mày mò lên ý tưởng cho từng góc trong nhà.";
const link =
  "mua-can-ho-58m2-vo-chong-tre-tu-thiet-ke-sieu-ung-nhung-ne-nhat-la-chi-phi-sieu-hat-de";
const tagparam = [
  "Mua nhà",
  "thiết kế nhà",
  "căn hộ nhỏ",
  "Đồ nội thất",
  "đồ decor",
  "phong cách japandi",
  "trồng cây",
  "khoe nhà đẹp",
  "house n home",
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

export default function page_20210729162241() {
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
                      Vợ chồng chị Phương Dung và anh Nguyên Vũ đều là dân văn
                      phòng và đang bước sang những năm đầu tuổi 30. Cũng như
                      hầu hết những người xuống lập nghiệp tại Sài Gòn, anh chị
                      đã trải qua một quãng thời gian ở trọ cả mấy chục nơi. Khi
                      lựa chọn mua tổ ấm đầu tiên này, vợ chồng chị Dung có sẵn
                      phần tài chính tự tích góp trong nhiều năm, rơi vào khoảng
                      40% giá trị căn nhà, phần còn lại được vay ngân hàng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/23/z26322384633911d9084af810569058d31688d69539f45-1627053674217924367212.jpg"
                      alt="6, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Với mức thu nhập của dân văn phòng, anh chị chọn dự án
                      đang trong quá trình xây dựng, có chính sách đóng tiền
                      theo tiến độ. Như vậy số tiền phải đóng sẽ được giãn ra,
                      lãi suất cũng đỡ hơn. Thêm nữa, khi mua như vậy giá căn hộ
                      cũng sẽ mềm hơn so với căn hộ đã xây dựng xong.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z2632243806090f40abbf3d29eb241cf1ed8b5252f0d5e-1627053676093577112657.jpg"
                      alt="7, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Tuy nhiên, với dự án đang xây dựng như này cũng có nhiều
                      rủi ro nên mọi người cần phải đảm bảo yếu tố về tài chính
                      và độ uy tín của chủ đầu tư, nếu không, sẽ vướng vào các
                      dự án treo, chậm tiến độ. Riêng với căn của anh chị là
                      dạng cụm dự án, đã có 2 căn trong dự án này được xây từ
                      trước. Bạn chị cũng đang ở đây nên anh chị phần nào yên
                      tâm hơn.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z26322350700041c87e55d2c8a0733058c075db7098d02-16270536733401877526953.jpg"
                      alt="8, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Căn hộ này có diện tích sử dụng là 58m2, tuy nhỏ nhưng phù
                      hợp với hai vợ chồng. Ngoài ra, vị trí gần sông cũng là
                      điểm khiến chị Dung "ưng bụng". Vì dồn hết tài chính vào
                      việc <strong>mua nhà</strong>, và vẫn còn đi vay mượn nên
                      chị Dung không đủ ngân sách cho việc thiết kế nội thất.
                      Bản thân là phận "khách hàng nghèo", nên sau khi đi hỏi
                      rất nhiều bên thiết kế, vợ chồng chị quyết định tự làm vì
                      theo tính toán có thể tiết kiệm được tới 40% số tiền.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z2632235083999d742fe306c09fb28cc53891d91722f14-16270536735421951868048.jpg"
                      alt="9, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Với ngân sách ít ỏi và không muốn lãng phí tiền bạc, những
                      đồ dùng được trang bị từ ban đầu mà vẫn dùng ổn như màu
                      tường, gạch lót, hệ bếp, nhà vệ sinh được anh chị giữ
                      nguyên vẹn. Những ý tưởng trang trí, thiết kế khác đều đến
                      từ Pinterest, Instagram, các group chia sẻ, layout trong
                      nhà cũng do 2 vợ chồng tự mày mò: "Cảm giác khi ‘một tay
                      ta làm nên tất cả’ vừa sợ vừa run nhưng cũng rất háo hức.
                      Khó khăn nhất là phải tìm các xưởng chịu nhận nhỏ lẻ từng
                      món theo ý tưởng của tụi mình".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z2632235068820d91d117294658f5eb21d366f58b8bb31-16270536727621501802734.jpg"
                      alt="10, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Với ngân sách tầm 60 triệu, vợ chồng chị Dung có thể làm
                      nhiều thứ hơn mọi người tưởng. Căn hộ 58m2 được chia thành
                      2 phòng ngủ, phòng khách liền kề với phòng bếp và 2 nhà vệ
                      sinh riêng biệt, các không gian của từng phòng sẽ chia nhỏ
                      theo.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/23/z26322384588280ba868db3caaa2d8941a2d04ec3fe03f-1627053674198151477532.jpg"
                      alt="11, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Dù rất thích <strong>phong cách Japandi</strong> nhưng anh
                      chị đã biến tấu lại cho hợp hoàn cảnh. Do diện tích khiêm
                      tốn, cần hạn chế mấy đồ cồng kềnh nên ở phòng khách, thay
                      vì đặt ghế sofa giới hạn số người ngồi và diện tích thì
                      chị lên ý tưởng làm bục gỗ. Ở bên dưới là các ô kéo để
                      đựng đồ, ở trên là bàn trà và nguyên một khu để nằm, ngồi
                      tùy thích. Khi khách tới nhà thì sẽ mang gối đệm ngồi ra,
                      còn lại ngày thường để gọn thoáng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/23/z26322401942677c15aafe26d638979d8aec00fff83aae-1627053675939145349200.jpg"
                      alt="12, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Về hệ thống rèm, anh chị lựa chọn rèm sáo tre ngang vì có
                      thể lấy sáng linh hoạt hơn rèm vải nhiều. Loại rèm này
                      cũng không quá khó để vệ sinh và màu sắc hợp với không khí
                      chung của nhà. Chủ đầu tư có sẵn 1 phần hõm vô để người ở
                      có thể tùy ý muốn đặt tủ đựng rượu, bàn ăn hoặc bất cứ thứ
                      gì tùy thích. Anh chị chọn làm tủ sách ở khu vực này.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z263224379960495154bde2a29488aac1762f946fac736-1627053676072425236071.jpg"
                      alt="13, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Phòng ngủ cũng nhỏ nên được tối ưu diện tích bằng cách kết
                      hợp bàn làm việc đôi cho 2 người. Bàn có góc chữ L, để
                      chồng chị là dân IT có thể bố trí hai màn hình thoải mái.
                      Để phòng thoáng mát, chị Dung chọn những món thật đơn giản
                      và đa năng, ví dụ 1 chiếc bàn đơn giản để đầu giường, và
                      một chiếc tủ mây đựng đồ hay mặc nhất. Tủ mây này còn có
                      thể decor tùy hứng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z2632238464911920913a04be3115ec73855a0858ad16f-1627053675902935695757.jpg"
                      alt="14, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Về phần trang trí, cả hai vợ chồng sinh ra và lớn lên ở Đà
                      Lạt, trải qua chục năm dưới Sài Gòn nhưng đều nhung nhớ về
                      những mảng xanh trong nhà, trong vườn. Vì vậy, anh chị
                      quyết định trang trí nhà cửa chủ yếu bằng cây xanh. Nhờ
                      vậy, việc trang trí trở nên linh hoạt hơn. Anh chị còn có
                      thể thay đổi dễ dàng theo ý thích và tạo được không gian
                      xanh mát trong căn nhà, lại tiết kiệm hơn khi chọn mua cây
                      từ bé, rồi chăm cây lớn dần.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z2632238476586779135744542cfd8928d417ced5e0cd5-1627053675924590417962.jpg"
                      alt="15, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Ý tưởng này dẫn đến sự ra đời 2 cái kệ cây kỳ công tốn sức
                      ở phòng khách và ngoài ban công. Hai chiếc kệ cây này được
                      anh chị lên ý tưởng, kiếm hình minh họa rồi đi kiếm cây gỗ
                      có dáng đẹp, những người thợ có tâm sẽ giúp xử lý cây để
                      chống nước, mối mọt theo thời gian. Công đoạn tương tự với
                      các hệ đọt kệ. Màu của gốm, cây xanh, đất nung, và chậu
                      cây hài hòa với nhau, nên chỉ cần là 1 bức tường nền trắng
                      đơn giản cũng đủ làm kệ cây này nổi bật lên nhiều.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Để chi phí tối ưu nhất, anh chị thường lên danh sách nhiều
                      xưởng, gửi hình mẫu cho họ, so sánh về giá và chất liệu.
                      Sau đó chọn ra xưởng đạt tiêu chí về chất lượng và giá
                      nhất. Ngoài ra, vợ chồng chị còn tham quan hội chợ
                      Vietbuild để vừa có thể coi trực tiếp thành phẩm họ làm,
                      vừa có thêm thông tin của nhiều xưởng.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z26322384679546c53d312f4dbb2b9224fda0ea873a733-1627053675912463878064.jpg"
                      alt="16, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Chị Dung chia sẻ rằng: "Đôi lúc mình cũng có nghe được
                      những câu hỏi về việc nếu phải bưng bê cây cối ra vô để
                      tưới hoài như thế này thì sẽ mệt lắm. Thật sự, đối với
                      mình, đó là 1 cảm giác thật thích khi quan sát sự sống
                      phát triển trong nhà nhờ cây, mỗi một mầm cây, nhánh lá
                      mới phát triển đều khiến mình háo hức chờ mong. Khi tưới,
                      nhìn những nhánh lá căng mọng lấp lánh nước cũng giống như
                      mình đang làm mát lại tinh thần sau chuỗi ngày đi làm,
                      chạy xe ngoài kia".
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z263223844383509e586b6e32e5e48abe4437586da6fd0-16270536735751536677636.jpg"
                      alt="17, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z263224023436472d19cd3aaa9aa1476dc7c08cb66c28a-16270536759751410152609.jpg"
                      alt="18, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z2632241620580603d95646c800f04b3c66eb7a9307f74-1627053675995502550701.jpg"
                      alt="19, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z26322416263576c4473ec3ff165c59fa52590a4f7eb93-16270536760551839977687.jpg"
                      alt="20, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/23/z26322384515319c1420be75a2d69e7223c21926adcee8-1627053673625493246762.jpg"
                      alt="21, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z26322384512239ad8f08b73a2f7766f6397f4b2f00c92-1627053673607407998374.jpg"
                      alt="22, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2021/7/23/z2632243801620d6de187f48be0380640f90e68ba1a40d-1627053676084522598455.jpg"
                      alt="23, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/22/khoenhadepcover-16239242083931171524946-16269555950411684659790.jpeg"
                      alt="24, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/1000/203336854389633024/2021/7/22/khoenhadepcover-16239242083931171524946-16269555950411684659790.jpeg"
                      alt="25, Mua nhà,thiết kế nhà,căn hộ nhỏ,Đồ nội thất,đồ decor,phong cách japandi,trồng cây,khoe nhà đẹp,house n home,"
                      note=""
                    />
                    <p>
                      Chi phí các món <strong>đồ nội thất</strong>:
                    </p>

                    <p>
                      - Bục gỗ + Tủ giày + Bàn làm việc: 17 triệu. Gỗ MDF An
                      cường lõi xanh chống ẩm.
                    </p>
                    <p>- Hệ màn sáo tre full nhà: 10 triệu</p>
                    <p>- Tủ sách âm tường: 8 triệu . Gỗ MDF thường An Cường</p>
                    <p>- Quạt trần giả gỗ: 4,5 triệu</p>
                    <p>- Hệ kệ cây: 6 triệu cho 2 cái kệ cây lớn</p>
                    <p>- Tủ lưới mây phòng ngủ: 4,5 triệu</p>
                    <p>
                      - Tủ mây đặt theo mẫu trên Pinterest ở phòng bếp: 3,5
                      triệu
                    </p>
                    <p>- Bàn trà gỗ: 1,2 triệu</p>
                    <p>- Gương nhộng tròn viền gỗ: 750.000 đồng</p>
                    <p>- Đôn thú 870.000 đồng</p>
                    <p>Nguồn: NVCC</p>
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
