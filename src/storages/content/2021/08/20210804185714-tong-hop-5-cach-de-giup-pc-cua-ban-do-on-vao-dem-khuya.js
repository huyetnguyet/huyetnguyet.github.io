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
"timestamp": '04/08/2021 06:57 PM',
"title": 'Tổng hợp 5 cách để giúp PC của bạn đỡ ồn vào đêm khuya',
"description": 'Vào buổi đêm tĩnh lặng, bạn sẽ thấy dàn PC của mình phát ra những tiếng ồn ào không cần thiết...',
"src": 'https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-16280086374332119094977.jpg',
"alt": 'TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,',
"category": 'tech',
"date": '04/08/2021',
"time": '06:57 PM',
"link": '/tong-hop-5-cach-de-giup-pc-cua-ban-do-on-vao-dem-khuya',
"zcomponent": 'page_20210804185714',
"filepath": './20210804185714-tong-hop-5-cach-de-giup-pc-cua-ban-do-on-vao-dem-khuya.js'
}



<ContentImage
src=""
alt=""
note=""
/>
*/

/* ---------------------------------------------------------------- */
const category = "tech";
const categoryLink = "/tech";
const title = "Tổng hợp 5 cách để giúp PC của bạn đỡ ồn vào đêm khuya";
const author = "Axium Fox";
const source = "Pháp luật và bạn đọc";
const timestamp = "04/08/2021 06:57 PM";
const description =
  "Vào buổi đêm tĩnh lặng, bạn sẽ thấy dàn PC của mình phát ra những tiếng ồn ào không cần thiết...";
const link = "tong-hop-5-cach-de-giup-pc-cua-ban-do-on-vao-dem-khuya";
const tagparam = [
  "TIẾNG ỒN",
  "GAMING",
  "DÀN PC",
  "TIN TỨC GAME",
  "CỘNG ĐỒNG MẠNG",
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

export default function page_20210804185714() {
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
                      Hầu hết thời gian ban ngày thì <strong>tiếng ồn</strong>{" "}
                      phát ra từ PC không phải là vấn đề, do nó bị những âm
                      thanh từ cuộc sống lấn át mất rồi. Tuy nhiên khi màn đêm
                      trả lại sự yên tĩnh cho phố phường thì độ ồn của{" "}
                      <strong>dàn PC</strong> bắt đầu trở nên phiền phức. Ví dụ
                      như mình đi, tầm 1 giờ sáng mà mình không đeo tai nghe thì
                      7 cái quạt và 2 cái HDD trong case nó kêu cứ như là phản
                      lực vậy. Để khắc phục chuyện đó thì mình có tìm được 5
                      cách sau đây, hy vọng nó cũng sẽ giúp giải quyết vấn đề về
                      độ ồn PC của bạn.
                    </p>
                    <h5>
                      Dùng quạt thông gió PWM, loại to nhất vừa case bạn. Quạt
                      PWM có kiểm soát vòng tua, loại to sẽ giúp PC đỡ ồn hơn
                      loại nhỏ
                    </h5>
                    <p>
                      Quạt thông gió trong case là thứ mà mình muốn nhắc đến đầu
                      tiên vì chúng thường chiếm số lượng nhiều nhất và cũng
                      thường góp phần lớn nhất trong việc tạo{" "}
                      <strong>tiếng ồn</strong>.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/133514250583805952/2021/8/3/photo-1-16280086374332119094977.jpg"
                      alt="1, TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Về cách kiểm soát số vòng tua thì quạt thông gió case PC
                      có thể chia làm 2 loại chính là quạt thường và quạt PWM.
                      Loại thường không thể điều chỉnh tốc độ bằng phần mềm được
                      nên nó sẽ chỉ chạy có 1 tốc độ, quay cỡ nào thì ồn cỡ đó.
                      Mà nếu chỉnh được thì chỉ có chỉnh thủ công bằng cách
                      chỉnh hub quạt mà thôi, mà bạn thì không thể gỡ nắp case
                      ra chỉ để chỉnh nó hoài được.
                    </p>
                    <p>
                      Loại PWM và sẽ quay nhanh hay chậm tùy theo nhiệt độ linh
                      kiện nên nó sẽ giúp <strong>dàn PC</strong> của bạn đỡ ồn
                      hơn ở mức tải thấp. Ngoài ra thì bạn có thể tùy chỉnh bằng
                      phần mềm để đạt được mức hiệu năng tản nhiệt/độ ồn mà bạn
                      mong muốn. Một thông tin nữa cho bạn nào chưa biết thì hầu
                      hết quạt trên tản nhiệt PC, từ cùi bắp như tản stock Intel
                      cho đến mấy cái quạt trên tản xịn của Noctua đều là PWM
                      hết, bơm của tản nước cũng vậy luôn.
                    </p>

                    <p>
                      Còn về lý do vì sao mình nói mấy bạn nên dùng quạt loại
                      lớn nhất có thể thì là vì nếu cùng thiết kế cánh quạt thì
                      những chiếc quạt lớn sẽ tua chậm hơn quạt nhỏ. Từ đó, để
                      xử lý cùng một mức nhiệt lượng thì quạt cỡ lớn sẽ quay
                      chậm hơn và ít ồn hơn so với quạt nhỏ.
                    </p>
                    <h5>
                      Dùng tản nhiệt loại siêu êm – Bản chất bộ tản đã được
                      thiết kế để giảm độ ồn
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-1-16280086399082141856184.jpg"
                      alt="2, TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Có một số dòng tản nhiệt khí được tối ưu để giúp PC đỡ ồn,
                      đặc điểm dễ nhận dạng nhất là chúng có quạt và heatsink
                      rất lớn. Bộ tản điển hình nhất mà mình thấy là Noctua NH –
                      D15, độ ồn tối đa của nó chỉ có 24,6 dB mà thôi, phải nói
                      là êm. Những bộ tản mạnh và êm như thế ngoài việc ít ồn
                      cũng giúp cho dàn quạt thông gió PWM của bạn chạy chậm và
                      hiệu quả hơn, từ đó nâng cao độ yên tĩnh cho{" "}
                      <strong>dàn PC</strong>.
                    </p>

                    <p>
                      Đối với bạn nào dùng tản nước thì mình có một lưu ý là
                      luôn để cụm bơm-block thấp hơn điểm cao nhất của rad nước
                      nhé. Lý do là vì trong bộ tản luôn có khoảng khí. Nếu bạn
                      để cụm bơm-block là điểm cao nhất của bộ tản thì khoảng
                      khí sẽ lọt vào đó, cánh quạt của bơm sẽ vỗ vào khoảng khí
                      đó, tạo ra tiếng róc rách và làm giảm hiệu suất của bơm.
                      Ngoài ra nó cũng khiến cho cụm bơm-block rung hơn, rung
                      sang cả dàn linh kiện của bạn nữa.
                    </p>
                    <h5>
                      Vệ sinh sạch heatsink, cánh quạt, các tấm lọc bụi và thay
                      keo tản nhiệt – Tản nhiệt hiệu quả sẽ đỡ ồn hơn
                    </h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-2-1628008642990697045106.jpg"
                      alt="3, TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Bạn bè mình mà than máy nóng thì câu đầu tiên mình hỏi sẽ
                      là về tình trạng vệ sinh của máy, bất kể là máy bàn hay
                      laptop luôn. Đó là vì bụi có thể tác động khá nhiều đến
                      hiệu quả tản nhiệt của máy, làm quạt quay mạnh hơn để xử
                      lý cùng một lượng nhiệt để rồi làm cho máy ồn hơn.
                    </p>

                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-3-16280086409021372263806.jpg"
                      alt="4, TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />
                    <p>
                      Khi bám vào cánh quạt, bụi sẽ làm quạt giảm hiệu suất khí
                      động học. Khi bám vào heatsink (các lá tản nhiệt) thì nó
                      sẽ cản trở quá trình trao đổi nhiệt của bộ tản và không
                      khí. Khi đóng quá nhiều vào màng lọc, bụi sẽ cản trở quá
                      trình lưu thông khí. Tất cả những thứ đó sẽ làm máy bạn
                      trở nên nóng hơn và ồn hơn. Thế nên nếu bạn ghét{" "}
                      <strong>tiếng ồn</strong> thì tốt nhất là bạn nên đảm bảo
                      dàn máy của mình luôn sạch sẽ.
                    </p>
                    <p>
                      Thêm một cái nữa là nếu đã 1-2 năm chưa thay keo tản nhiệt
                      rồi thì bạn có thể nghĩ đến chuyện thay keo tản nhiệt cho
                      CPU. Có thể nó sẽ giúp tản nhiệt hoạt động hiệu quả hơn,
                      CPU bớt nóng và quạt cũng đỡ quay hơn đấy.
                    </p>
                    <h5>
                      Dùng mút trứng gà – Tiêu âm, giảm ồn, khử tiếng vang
                    </h5>
                    <p>
                      Cái này khá hiệu quả nhưng hơi cồng kềnh. Mút trứng gà
                      được dùng trong hầu hết các phòng thu và rất nhiều studio.
                      Mục đích của nó là hấp thu âm thanh và khử tiếng vang. Bạn
                      cũng có thể ứng dụng nó để giúp giảm ồn cho PC khi đêm về
                      và không gian xung quanh bắt đầu trở nên yên tĩnh. Thật ra
                      mình thì cũng chưa dùng mút trứng gà đâu, mình dùng cái
                      thùng carton gấp dẹp thôi nhưng chắc chắn là mút trứng gà
                      sẽ hiệu quả hơn.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-4-16280086404031822718043.jpg"
                      alt="5, TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Bạn chỉ cần cắt một miếng mút trứng gà to hơn thùng PC một
                      chút rồi đặt ở giữa mình và thùng PC là được. Ví dụ như
                      thùng case PC của mình nằm ở sau màn hình. Khi mình nhét
                      cái thùng carton vào giữa màn hình và thùng PC thì độ ồn
                      giảm hẳn. Có mút trứng gà thì sẽ còn ngon hơn nữa. Nếu
                      miếng mút mềm quá, lấy ra lấy vào khó khăn thì bạn có thể
                      dán một miếng thùng carton đằng sau cho nó cứng nhé, nhớ
                      hướng mặt mút trứng gà về thùng case để tiêu âm.
                    </p>
                    <h5>
                      Undervolt (hạ điện áp) – Linh kiện đỡ nóng, quạt quay chậm
                      nên đỡ ồn hơn
                    </h5>
                    <p>
                      *Lưu ý, thủ thuật này tuy rất hiệu quả nhưng chỉ dành cho
                      dân chuyên
                    </p>
                    <p>
                      Undervolt có thể giúp CPU, GPU của bạn giảm điện năng tiêu
                      thụ, từ đó hạ đến 5-10 độ một cách dễ dàng. Về cơ bản thì
                      đây là một thủ thuật giảm điện thế, giảm lượng điện của
                      chip để giảm mức nhiệt độ tỏa ra. Từ đó thì dàn quạt và
                      tản nhiệt cũng sẽ chạy êm hơn. Nếu làm đúng thì nó chẳng
                      những không giảm hiệu năng mà còn giúp CPU, GPU của bạn
                      mát hơn, máy chạy êm hơn nữa. Ngoài ra thì nếu PC của bạn
                      ít ăn điện hơn thì quạt nguồn cũng sẽ chạy ở vòng tua thấp
                      hơn và êm hơn đấy.
                    </p>
                    <RelationNewsInPage category={category} />
                    <h5>(Bonus) Dùng SSD</h5>
                    <p>
                      HDD là ổ cứng cơ, đĩa từ của nó luôn quay và tạo ra{" "}
                      <strong>tiếng ồn</strong>, tuy không lớn nhưng vẫn đủ để
                      có thể nghe được. Để giải quyết nó triệt để thì bạn có thể
                      chuyển lên dùng SSD là xong.
                    </p>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-6-1628008641968890011557.jpg"
                      alt="6, TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Tuy nhiên, nếu đã dùng HDD thì tức là bạn có mục đích của
                      bạn. Có thể bạn chưa có kinh phí nâng cấp hoặc cố tình
                      dùng HDD song song SSD để lấy dung lượng lớn chứa file như
                      mình. Mà nếu đã có mục đích riêng như vậy thì bạn cũng đã
                      chấp nhận độ ồn của HDD, chẳng có lý do gì để bỏ HDD và
                      tốn tiền mua SSD chỉ vì chút độ ồn cả.
                    </p>
                    <p>
                      Tuy nhiên mình nghĩ lời khuyên này sẽ phù hợp với những
                      bạn đang dùng HDD có ý định chuyển hết lên full SSD. Giờ
                      thì ngoài việc SSD nhanh và bền ra thì bạn đã có thêm lý
                      do để làm việc đó rồi đấy.
                    </p>
                    <h5>Dùng case silent</h5>
                    <ContentImage
                      src="https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/8/3/photo-7-16280086415001056512317.jpg"
                      alt="7, TIẾNG ỒN,GAMING,DÀN PC,TIN TỨC GAME,CỘNG ĐỒNG MẠNG,"
                      note=""
                    />

                    <p>
                      Một số dòng case được tối ưu để giảm độ ồn xuống mức thấp
                      nhất, có thể gọi chung là case silent. Mấy bạn khi đi
                      build máy có thể ưu tiên chọn mấy dòng case này để chơi
                      game đêm cho êm. Nếu không biết mẫu nào êm hơn thì có thể
                      tham khảo ý kiến của nhân viên tư vấn tại của hàng hoặc tư
                      vấn online nhé. Tuy nhiên cái case cũng chỉ là một phần
                      thôi, máy chạy êm hay không còn phụ thuộc vào rất nhiều
                      yếu tố mà mình đã nói bên trên nữa nên mấy bạn ráng chú ý
                      để tối ưu.
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
