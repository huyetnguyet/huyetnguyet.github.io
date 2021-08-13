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
"timestamp": '11/08/2021 10:54 AM',
"title": 'Câu cửa miệng giúp founder TikTok khởi nghiệp thành công chỉ sau 6 năm ra trường: "Trì hoãn sự thoả mãn lại ngay!"',
"description": 'Bạn đã nghe đến thuật ngữ "trì hoãn thỏa mãn" bao giờ chưa? Càng biết chờ đợi, thành quả thu được sẽ càng lớn. Đây chính là biết nhịn cái lợi nhỏ để có thể thu được cái lợi lớn hơn. Để làm được, yêu cầu phải kiểm soát tốt được bản thân.',
"src": 'https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-2-16286533700861518086712.jpg',
"alt": 'công ty sở hữu,người giàu nhất thế giới,tốt nghiệp đại học,công ty khởi nghiệp,',
"category": 'news',
"date": '11/08/2021',
"time": '10:54 AM',
"link": '/cau-cua-mieng-giup-founder-tiktok-khoi-nghiep-thanh-cong-chi-sau-6-nam-ra-truong-tri-hoan-su-thoa-man-lai-ngay',
"zcomponent": 'page_20210811105457',
"filepath": './20210811105457-cau-cua-mieng-giup-founder-tiktok-khoi-nghiep-thanh-cong-chi-sau-6-nam-ra-truong-tri-hoan-su-thoa-man-lai-ngay.js'
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
  'Câu cửa miệng giúp founder TikTok khởi nghiệp thành công chỉ sau 6 năm ra trường: "Trì hoãn sự thoả mãn lại ngay!"';
const author = "TÚ KHÊ,";
const source = "Tri Thức Trẻ";
const timestamp = "11/08/2021 10:54 AM";
const description =
  'Bạn đã nghe đến thuật ngữ "trì hoãn thỏa mãn" bao giờ chưa? Càng biết chờ đợi, thành quả thu được sẽ càng lớn. Đây chính là biết nhịn cái lợi nhỏ để có thể thu được cái lợi lớn hơn. Để làm được, yêu cầu phải kiểm soát tốt được bản thân.';
const link =
  "cau-cua-mieng-giup-founder-tiktok-khoi-nghiep-thanh-cong-chi-sau-6-nam-ra-truong-tri-hoan-su-thoa-man-lai-ngay";
const tagparam = [
  "công ty sở hữu",
  "người giàu nhất thế giới",
  "tốt nghiệp đại học",
  "công ty khởi nghiệp",
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

export default function page_20210811105457() {
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
                      Vào thập niên 60, các nhà khoa học Mỹ đã tiến hành "Thí
                      nghiệm kẹo dẻo Stanford" nổi tiếng. Trong thí nghiệm này,
                      một nhóm trẻ em được yêu cầu ngồi chờ để nhận kẹo. Nếu
                      muốn lấy luôn thì chỉ được 1 viên, còn nếu ngồi chờ trong
                      khoảng thời gian đã quy định thì sẽ có 2 viên.
                    </p>
                    <p>
                      Kết quả cho thấy, những đứa trẻ có thể kiên trì trong thời
                      gian dài để nhận phần thưởng cao hơn thường đạt thành tích
                      tốt hơn trong cuộc sống. Kể từ đây, khái niệm "trì hoãn sự
                      thỏa mãn" ra đời, đề cập đến việc từ bỏ sự hài lòng tức
                      thời để đạt những kết quả dài hạn có giá trị hơn.
                    </p>
                    <p>
                      "Trì hoãn sự thỏa mãn" cũng là câu cửa miệng của Trương
                      Nhất Minh - founder Bytedance,{" "}
                      <strong>công ty sở hữu</strong> hai sản phẩm nổi tiếng là
                      ứng dụng đọc báo Toutiao và mạng xã hội TikTok. Ông coi
                      đây như một phương châm sống, áp dụng hàng ngày trong cuộc
                      đời mình.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628653361188148459138.png"
                      alt="1, công ty sở hữu,người giàu nhất thế giới,tốt nghiệp đại học,công ty khởi nghiệp,"
                      note="Thí nghiệm kẹo dẻo của Stanford (Ảnh: YouTube)"
                    />
                    <p>
                      Trương Nhất Minh sinh năm 1983, là cựu sinh viên ĐH Nam
                      Khai. Chỉ trong 6 năm, từ một lập trình viên bình thường
                      trở thành CEO công ty công nghệ nổi tiếng. Hiện tại, ông
                      đang sở hữu khối tài sản trị giá 35,8 tỷ USD, đứng thứ 39
                      trong số những <strong>người giàu nhất thế giới</strong>.
                    </p>
                    <p>
                      Nhiều doanh nhân cùng thời nhận xét, khả năng học hỏi và
                      nâng cao trình độ của Trương Nhất Minh rất nổi bật. Ông
                      làm việc thành thục như một chiếc máy, biết cách tự điều
                      chỉnh bản thân, giỏi kiềm chế cảm xúc và có tầm nhìn dài
                      hạn.
                    </p>
                    <h5>
                      "Đa phần mọi người gặp vấn đề trong cuộc sống là do không
                      thể trì hoãn sự thỏa mãn của bản thân", ông nói.
                    </h5>
                    <p>
                      Bạn phải tự mình lựa chọn ngành học, công ty, sự nghiệp và
                      con đường phát triển, đừng để bị lung lay bởi những lựa
                      chọn ngắn hạn.
                    </p>
                    <p>
                      Ví dụ, sau khi tốt nghiệp, nhiều người sẵn sàng làm việc
                      cho các công ty nước ngoài, chứ không phải các công ty mới
                      thành lập. Lý do là vì ở đó nổi tiếng hơn, lương cao hơn.
                    </p>
                    <p>
                      Tuy nhiên, đây là một tầm nhìn ngắn hạn. Khi vừa mới tốt
                      nghiệp, mức lương chênh lệch khoảng vài triệu đồng thực sự
                      không đáng kể.
                    </p>
                    <p>
                      Trước khi đưa ra quyết định, cần chú ý nhiều hơn đến bản
                      chất sự việc, xem liệu có lợi ích lâu dài hay không. Nếu
                      chỉ nhìn vào lợi ích ngắn hạn, bạn đang lãng phí thời gian
                      của chính mình.
                    </p>
                    <p>
                      Năm 2016, một doanh nhân trẻ đã hỏi Trương Nhất Minh:
                      "Trong hơn 3 năm, ông đã đưa ra quyết định quan trọng nào
                      để biến giá trị của Toutiao từ 100 triệu USD lên 10 tỷ
                      USD?".
                    </p>
                    <p>
                      Cựu CEO Bytedance cho biết, hầu hết các quyết định đó được
                      ông đưa ra trong vòng 3 tháng đầu kinh doanh.
                    </p>
                    <p>
                      Việc bạn có trì hoãn được cảm giác thỏa mãn hay không sẽ
                      quyết định việc bạn có tầm nhìn dài hạn hay ngắn hạn.
                    </p>
                    <p>
                      Năm 2005, Trương Nhất Minh{" "}
                      <strong>tốt nghiệp đại học</strong> và gia nhập Kuxun -
                      một startup đặt chuyến du lịch trực tuyến.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-3-16286533697231164668582.jpg"
                      alt="4, công ty sở hữu,người giàu nhất thế giới,tốt nghiệp đại học,công ty khởi nghiệp,"
                      note=""
                    />
                    <p>
                      Ban đầu, ông chỉ là một kỹ sư bình thường. Thế nhưng sang
                      năm 2, ông đã quản lý một đội khoảng 50 người trong công
                      ty, chịu trách nhiệm về back-end và một số đầu việc liên
                      quan đến sản phẩm.
                    </p>
                    <p>
                      Mọi thứ tiến triển rất thuận lợi, không phải vì Trương
                      Nhất Minh có kỹ năng tốt nhất, hay giàu kinh nghiệm nhất.
                      Bí quyết của ông nằm ở 2 việc.
                    </p>
                    <h5>
                      Thứ nhất, không phân biệt ta và người trong công việc.
                    </h5>
                    <p>
                      Sau khi hoàn thành nhiệm vụ của mình, nếu có thể, Trương
                      Nhất Minh sẽ giúp các đồng nghiệp khác giải quyết công
                      việc. Khi gặp người mới vào nghề, ông cũng sẽ tận tình
                      giảng giải cho họ. Nhờ đó, trình độ của ông ngày càng lên
                      cao.
                    </p>
                    <p>
                      Trong 2 năm đầu tiên, hôm nào Trương Nhất Minh cũng về nhà
                      lúc 12h đêm, không nghỉ ngơi mà tiếp tục ngồi lập trình.
                      Ông làm vậy vì đam mê với nghề, không phải do yêu cầu từ
                      công ty.
                    </p>
                    <h5>
                      Thứ hai, không bao giờ đặt ra ranh giới khi làm mọi việc.
                    </h5>
                    <p>
                      Lúc đó, Trương Nhất Minh chỉ phụ trách phần kỹ thuật,
                      nhưng nếu sản phẩm gặp vấn đề, ông cũng không ngại tham
                      gia thảo luận tìm giải pháp. Dù nhiều người khuyên vị
                      doanh nhân này không cần làm vậy, ông vẫn từ tốn nói rằng
                      làm việc nhiều giúp ông có thêm cơ hội luyện tập.
                    </p>
                    <p>
                      Việc trì hoãn sự thỏa mãn sẽ khiến ta sẵn sàng chủ động
                      làm nhiều việc hơn và rèn luyện nhiều hơn, thay vì lo lắng
                      về việc: "Đây có phải là việc mình nên làm?".
                    </p>
                    <p>
                      Trước khi thành lập Toutiao, Nhất Minh đã 4 lần khởi
                      nghiệp, nhưng không lần nào gắn bó đến cùng. Ông đã sớm
                      nhận ra: nếu việc khởi nghiệp không suôn sẻ, chẳng thà đập
                      đi mà làm lại từ đầu.
                    </p>
                    <p>
                      Ở một số <strong>công ty khởi nghiệp</strong>, mọi người
                      thường kiên trì bám trụ đến cùng. Founder TikTok lại nghĩ,
                      họ nên giải tán sớm thì tốt hơn, dành thời gian để bắt đầu
                      lại, sản sinh thêm những giá trị mới.
                    </p>
                    <p>
                      Chẳng hạn, khi Trương Nhất Minh rời bỏ Jiujiufang, một số
                      nhà đầu tư cũ của công ty này cũng chuyển qua đổ tiền vào
                      Toutiao và thu về lợi nhuận tốt.
                    </p>
                    <p>
                      Trương Nhất Minh cho biết, nếu không thấy triển vọng khởi
                      nghiệp, ông sẽ rời đi không chút ngần ngại hay tội lỗi.
                      Thành công của một doanh nghiệp vốn đã có xác suất thấp.
                      Chủ động rời đi sớm, biết đâu công ty sẽ có cơ hội tìm
                      được người tốt hơn.
                    </p>
                    <p>
                      Lập nghiệp không thuận lợi, hãy nhanh chóng dẹp bỏ. Trì
                      hoãn sự thỏa mãn sẽ giúp bạn nhìn về phía trước, không bị
                      mắc kẹt ở thực tại.
                    </p>
                    <p>
                      Trương Nhất Minh từng được mời làm CEO của Tencent, nhưng
                      ông nghĩ điều đó thật nhàm chán. Thay vì quản lý một thứ
                      có sẵn, ông muốn tự mình khởi nghiệp hơn.
                    </p>
                    <RelationNewsInPage category={category} />
                    <p>
                      Chưa đầy 1 năm sau khi thành lập Toutiao, Trương Nhất Minh
                      nhận được lời mời đầu tư vô cùng hấp dẫn từ một vị đại
                      gia. Ông suy nghĩ cả tuần rồi quyết định từ chối.
                    </p>
                    <p>
                      Vị doanh nhân này coi đây là một trải nghiệm khích lệ tinh
                      thần, giúp ông phát huy động lực để chinh phục những mục
                      tiêu lớn hơn. Nếu nhận lời giúp đỡ của đại gia, ông sẽ bị
                      bó buộc vào hàng ngũ, khiến bản thân bị giam cầm.
                    </p>
                    <p>
                      Đa số mọi người chỉ nhìn thấy ưu điểm trước mắt, mà bỏ qua
                      nhược điểm tiềm ẩn. Đây là một sai lầm trong tầm nhìn.
                    </p>
                    <p>
                      Đọc tiểu sử về các công ty lớn trên thế giới, Trương Nhất
                      Minh hiểu rằng một doanh nghiệp muốn lớn mạnh thì phải
                      kiên nhẫn chờ đợi, tập trung phát triển tối ưu. Ví dụ,
                      Amazon đã kiên trì chịu lỗ trong một thời gian dài, kể cả
                      Alibaba cũng không có lãi trước năm 2012.
                    </p>
                    <p>
                      Đừng chỉ nghĩ đến những mục tiêu ngắn hạn như gieo hạt vào
                      mùa xuân để thu hoạch vào mùa thu. Muốn trồng cây lâu năm,
                      phải chịu cảnh vài năm đầu không có gì thu hoạch, nhưng
                      quả ngọt sau này thì nhiều vô kể.
                    </p>
                    <p>
                      Hãy tìm cách đẩy mục tiêu tối ưu càng xa càng tốt, rồi
                      nghĩ xem cuối cùng mình thu lại được bao nhiêu.
                    </p>
                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-1-1628653369347447486610.jpg"
                      alt="2, công ty sở hữu,người giàu nhất thế giới,tốt nghiệp đại học,công ty khởi nghiệp,"
                      note="(Ảnh: Internet)"
                    />
                    <p>
                      Trong số các bạn bè và đồng nghiệp của Trương Nhất Minh,
                      nhiều người thậm chí còn giỏi hơn ông. Thế nhưng, trong 10
                      năm qua, không ai vượt qua được vị doanh nhân này.
                    </p>
                    <h5>
                      Bởi lẽ, sau khi tốt nghiệp, họ đặt ra những mục tiêu không
                      cao.
                    </h5>
                    <p>
                      Không ít người đi làm chỉ để kiếm tiền mua nhà ở thành
                      phố. Họ dành hết tâm sức cho việc này, nên sự nghiệp ít
                      nhiều cũng bị ảnh hưởng, tinh thần càng trở nên kiệt quệ.
                    </p>
                    <p>
                      Một người bạn còn nhận thêm vài ba công việc bán thời gian
                      để trả tiền đặt cọc nhà. Ông ta có vẻ đã có lãi, nhưng
                      thực tế là lỗ.
                    </p>
                    <p>
                      Nếu không muốn trở nên tầm thường, phải có mục tiêu cao
                      hơn. Thực hiện được mục tiêu cao, những thứ trên chỉ là
                      chuyện đơn giản. Trương Nhất Minh đã suy nghĩ như vậy.
                    </p>
                    <p>
                      Trì hoãn sự thỏa mãn sẽ giúp bạn có những mục tiêu cao hơn
                      và đặt ra những tiêu chuẩn cao hơn. Có thể bạn tiến triển
                      chậm trong vài năm đầu, nhưng nhìn lại sau 10 năm, chắc
                      chắn sẽ rất khác.
                    </p>
                    <p>
                      Khi Trương Nhất Minh tốt nghiệp, ông đặt mục tiêu rất cao:
                      "Kiếm được 1 triệu đầu tiên, phải kiếm được nhiều tiền nhờ
                      khởi nghiệp".
                    </p>
                    <p>
                      Ông làm vậy không phải vì ham muốn tiền bạc. Cái ông cần
                      là cảm giác chinh phục thử thách, đối đầu với những người
                      giỏi.
                    </p>
                    <p>
                      Trong vài năm qua, Trương Nhất Minh cảm thấy đã học lại
                      những điều mà lẽ ra mình phải học ở tuổi thiếu niên: cách
                      đọc, cách hiểu bản thân, cách giao tiếp với người khác,
                      cách sắp xếp thời gian, cách tiếp thu ý kiến của người
                      khác một cách chính xác, cách tạo động lực cho bản thân,
                      cách viết, cách tiếp tục rèn luyện và cách kiên nhẫn.
                    </p>
                    <h5>
                      Điều ông ngưỡng mộ nhất là khả năng trì hoãn sự thỏa mãn
                      của chính mình.
                    </h5>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-2-16286533700861518086712.jpg"
                      alt="3, công ty sở hữu,người giàu nhất thế giới,tốt nghiệp đại học,công ty khởi nghiệp,"
                      note=""
                    />
                    <p>
                      Hầu hết những nỗi đau trong cuộc sống là do ta muốn được
                      thỏa mãn tức thời. Một chút nỗ lực mà không thấy được báo
                      đáp luôn, ta sẽ cảm thấy đau khổ.
                    </p>
                    <p>
                      Trương Nhất Minh cho rằng bản chất của việc trì hoãn sự
                      thỏa mãn là khắc phục điểm yếu của con người. Đây là một
                      cách tu dưỡng lâu dài.
                    </p>
                    <p>
                      Càng trì hoãn sự hài lòng, bạn càng trở nên kiên nhẫn,
                      tiêu chuẩn đề ra cũng cao hơn, mục tiêu cũng lớn dần. Bạn
                      có thể bình tĩnh và tập trung hơn trong công việc, không
                      quan tâm đến lợi ích trước mắt. Đối với bạn, được mất như
                      không, thành công không kiêu, bại không nản.
                    </p>

                    <ContentImage
                      src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2021/8/11/photo-4-16286533704461307771374.jpg"
                      alt="5, công ty sở hữu,người giàu nhất thế giới,tốt nghiệp đại học,công ty khởi nghiệp,"
                      note=""
                    />
                    <p>
                      Hồi học đại học, có lần Trương Nhất Minh đi sửa máy tính
                      bị hỏng giúp một bạn nữ xinh đẹp cùng quê. Ông nhanh chóng
                      rơi vào lưới tình và quyết định theo đuổi cô gái này.
                    </p>
                    <p>
                      Đáng tiếc thay, cô gái ấy đã từ chối Trương Nhất Minh
                      không hề do dự. Sau khi Trương Nhất Minh thú nhận sự thất
                      bại của mình, bạn cùng phòng định an ủi, nhưng ông cảm
                      thấy điều đó không thành vấn đề.
                    </p>
                    <p>
                      "Hiện tại là vậy, nhưng sau này chưa chắc đã vậy. Không
                      sao cả, chúng ta cứ xem tiếp xem sao", ông tự tin nói.
                    </p>
                    <p>
                      Do đó, Trương Nhất Minh tiếp tục sửa máy tính, tiếp tục
                      trò chuyện, tiếp tục hẹn cô gái ấy đi chơi. 2 tháng sau,
                      họ đã chính thức thành một cặp.
                    </p>
                    <p>
                      Cô gái đó không chỉ là mối tình đầu của Trương Nhất Minh,
                      mà còn chính là vợ ông sau này.
                    </p>
                    <p>(Theo Zhihu)</p>
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
