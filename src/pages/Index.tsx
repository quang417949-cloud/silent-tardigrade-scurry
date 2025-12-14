"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Banner Section */}
      <section className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        {/* Placeholder cho hình ảnh động. Vui lòng thay thế bằng đường dẫn hình ảnh thực tế. */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">Khám phá Đồng Nai</h1>
          <p className="text-lg md:text-2xl mt-4 drop-shadow-md">Vùng đất của thiên nhiên, công nghiệp và cơ hội đầu tư</p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-md py-3 md:py-4">
        <div className="container mx-auto flex flex-wrap justify-center gap-2 md:gap-4">
          <Button variant="ghost" className="text-base md:text-lg" onClick={() => scrollToSection('tourism')}>Du lịch</Button>
          <Button variant="ghost" className="text-base md:text-lg" onClick={() => scrollToSection('industry')}>Công nghiệp</Button>
          <Button variant="ghost" className="text-base md:text-lg" onClick={() => scrollToSection('investment')}>Đầu tư</Button>
          <Button variant="ghost" className="text-base md:text-lg" onClick={() => scrollToSection('contact')}>Liên hệ</Button>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        {/* Du lịch Section */}
        <section id="tourism" className="mb-16 pt-8">
          <Card className="p-6 md:p-8 shadow-lg border-none bg-white dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary-foreground">Du lịch – “Khám phá Đồng Nai”</CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground">Đắm mình vào vẻ đẹp tự nhiên và văn hóa độc đáo của Đồng Nai.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              {/* Du lịch tự nhiên và sinh thái */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-secondary-foreground">Du lịch tự nhiên và sinh thái</h3>
                  <p className="mb-3 text-lg leading-relaxed">
                    Đồng Nai tự hào có <span className="font-medium text-primary dark:text-primary-foreground">Vườn Quốc gia Cát Tiên</span>, một khu bảo tồn rừng nhiệt đới rộng lớn. Phần diện tích thuộc tỉnh Đồng Nai hỗ trợ các hoạt động như trekking, safari và nghiên cứu sinh thái, mang đến trải nghiệm gần gũi với thiên nhiên hoang dã.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: Wikipedia</span>
                  </p>
                  <p className="text-lg leading-relaxed">
                    <span className="font-medium text-primary dark:text-primary-foreground">Hồ Trị An</span> là một hồ nước nhân tạo rộng lớn, không chỉ là nguồn cung cấp nước mà còn là điểm đến lý tưởng cho các hoạt động dã ngoại, cắm trại và du lịch sinh thái ven hồ, với cảnh quan hùng vĩ và không khí trong lành.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: Wikipedia</span>
                  </p>
                </div>
                <div className="flex justify-center order-1 md:order-2">
                  <img src="/placeholder.svg" alt="Công viên quốc gia Cát Tiên" className="rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-80" />
                  <p className="sr-only">Hình ảnh gợi ý: Công viên quốc gia Cát Tiên / Hồ Trị An. Nguồn: Wikipedia</p>
                </div>
              </div>
              <Separator className="my-8 bg-border dark:bg-gray-700" />

              {/* Du lịch cộng đồng – nông nghiệp */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img src="/placeholder.svg" alt="Vườn trái cây Tân Triều" className="rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-80" />
                  <p className="sr-only">Hình ảnh gợi ý: Các điểm du lịch sinh thái nông nghiệp / làng du lịch cộng đồng (Tân Triều, vườn trái cây). Nguồn: Du Lịch Nông Thôn</p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-secondary-foreground">Du lịch cộng đồng – nông nghiệp</h3>
                  <p className="text-lg leading-relaxed">
                    Đồng Nai đang phát triển mạnh các mô hình du lịch nông nghiệp và trải nghiệm làng nghề. Du khách có thể tham gia vào các hoạt động như thăm vườn trái cây (ví dụ: làng bưởi Tân Triều), tìm hiểu quy trình sản xuất nông sản và trải nghiệm cuộc sống nông thôn bình dị, tạo nên một sản phẩm du lịch độc đáo và hấp dẫn.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: vietnamnews.vn</span>
                  </p>
                </div>
              </div>
              <Separator className="my-8 bg-border dark:bg-gray-700" />

              {/* Khu du lịch và dịch vụ */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-secondary-foreground">Khu du lịch và dịch vụ</h3>
                  <p className="mb-3 text-lg leading-relaxed">
                    <span className="font-medium text-primary dark:text-primary-foreground">Khu du lịch Bửu Long</span> là một điểm đến nổi bật, cung cấp đa dạng các hoạt động tham quan cảnh quan, trò chơi giải trí và trải nghiệm phù hợp cho mọi lứa tuổi, đặc biệt là các gia đình.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: Vinpearl</span>
                  </p>
                  <p className="text-lg leading-relaxed">
                    Ngoài ra, tỉnh còn có nhiều khu du lịch và điểm tham quan khác bao gồm các suối, hoa viên và di tích văn hóa lịch sử, góp phần làm phong phú thêm bản đồ du lịch của Đồng Nai.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: vietnam.vn</span>
                  </p>
                </div>
                <div className="flex justify-center order-1 md:order-2">
                  <img src="/placeholder.svg" alt="Khu du lịch Bửu Long" className="rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-80" />
                  <p className="sr-only">Hình ảnh gợi ý: Khu du lịch Bửu Long / Son Tien. Nguồn: Vinpearl / Cổng thông tin điện tử Đồng Nai</p>
                </div>
              </div>
              <Separator className="my-8 bg-border dark:bg-gray-700" />

              <p className="text-center text-xl italic text-gray-600 dark:text-gray-400">
                Đồng Nai hiện có gần 30 điểm du lịch và khu du lịch, đặt mục tiêu thu hút hàng triệu lượt khách mỗi năm.
                <span className="block text-sm italic mt-1">Nguồn: vietnam.vn, Báo Đồng Nai</span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Công nghiệp Section */}
        <section id="industry" className="mb-16 pt-8">
          <Card className="p-6 md:p-8 shadow-lg border-none bg-white dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary-foreground">Công nghiệp – “Đồng Nai công nghiệp và đầu tư”</CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground">Khám phá vai trò trung tâm công nghiệp và tiềm năng đầu tư của Đồng Nai.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              {/* Vai trò và quy mô công nghiệp */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-secondary-foreground">Vai trò và quy mô công nghiệp</h3>
                  <p className="mb-3 text-lg leading-relaxed">
                    Đồng Nai là một <span className="font-medium text-primary dark:text-primary-foreground">trung tâm công nghiệp trọng điểm</span> phía Nam của Việt Nam, với hệ thống các khu công nghiệp hiện đại phân bố rộng khắp tại Biên Hòa, Nhơn Trạch, Long Thành và Trảng Bom.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: Du Lịch Việt Nam</span>
                  </p>
                  <p className="mb-3 text-lg leading-relaxed">
                    Tỉnh sở hữu đa dạng các khu công nghiệp lớn như: Amata, Lộc An – Bình Sơn, Bàu Xéo, Tam Phước, Ông Kèo, Dầu Giây, cùng nhiều khu khác, tạo nên một bức tranh công nghiệp sôi động và đa ngành.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: khoxuongdep.com.vn</span>
                  </p>
                  <p className="text-lg leading-relaxed">
                    Tổng diện tích các khu công nghiệp đang hoạt động lên tới hàng nghìn hecta, thu hút lượng lớn vốn FDI và thúc đẩy phát triển các dịch vụ logistics, góp phần vào sự tăng trưởng kinh tế chung của khu vực.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: finlogistics.vn</span>
                  </p>
                </div>
                <div className="flex justify-center order-1 md:order-2">
                  <img src="/placeholder.svg" alt="Khu công nghiệp Amata Biên Hòa" className="rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-80" />
                  <p className="sr-only">Hình ảnh gợi ý: Toàn cảnh khu công nghiệp lớn như Amata Biên Hòa, Lộc An – Bình Sơn hoặc Nhơn Trạch. Nguồn: khoxuongdep.com.vn</p>
                </div>
              </div>
              <Separator className="my-8 bg-border dark:bg-gray-700" />

              {/* Lợi thế thuận lợi */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img src="/placeholder.svg" alt="Bản đồ vị trí các khu công nghiệp Đồng Nai" className="rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-80" />
                  <p className="sr-only">Hình ảnh gợi ý: Bản đồ vị trí các khu công nghiệp chính theo tỉnh. Nguồn: Khu Công Nghiệp Du Long</p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-secondary-foreground">Lợi thế thuận lợi</h3>
                  <p className="mb-3 text-lg leading-relaxed">
                    Với vị trí <span className="font-medium text-primary dark:text-primary-foreground">liền kề TP. Hồ Chí Minh</span>, Đồng Nai có lợi thế vượt trội về giao thông. Hệ thống cao tốc, cảng biển quốc tế và đặc biệt là Sân bay quốc tế Long Thành đang được xây dựng, tạo điều kiện thuận lợi tối đa cho hoạt động sản xuất và xuất khẩu hàng hóa.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: Sở Kế Hoạch Đầu Tư Đồng Nai</span>
                  </p>
                  <p className="text-lg leading-relaxed">
                    Các khu công nghiệp tại Đồng Nai thu hút đa dạng các ngành sản xuất, từ cơ khí, điện tử đến các ngành công nghiệp hỗ trợ, tạo nên một hệ sinh thái công nghiệp phong phú và bền vững.
                    <span className="block text-sm italic text-gray-500 dark:text-gray-400 mt-1">Nguồn: Tin nhanh bất động sản CafeLand</span>
                  </p>
                </div>
              </div>
              <Separator className="my-8 bg-border dark:bg-gray-700" />

              <p className="text-center text-xl italic text-gray-600 dark:text-gray-400">
                Đồng Nai luôn nằm trong nhóm các địa phương dẫn đầu về số lượng doanh nghiệp và tỷ lệ lấp đầy khu công nghiệp cao.
                <span className="block text-sm italic mt-1">Nguồn: news.piv.asia</span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Đầu tư Section */}
        <section id="investment" className="mb-16 pt-8">
          <Card className="p-6 md:p-8 shadow-lg border-none bg-white dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary-foreground">Đầu tư tại Đồng Nai</CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground">Cơ hội vàng cho các nhà đầu tư tại vùng đất đầy tiềm năng.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg md:text-xl text-center mb-6 leading-relaxed">
                Đồng Nai với những lợi thế vượt trội về vị trí địa lý chiến lược, cơ sở hạ tầng giao thông đồng bộ và chính sách thu hút đầu tư hấp dẫn, luôn là điểm đến lý tưởng cho các nhà đầu tư trong và ngoài nước. Chúng tôi cam kết tạo môi trường kinh doanh thuận lợi nhất để các doanh nghiệp phát triển bền vững.
              </p>
              <div className="flex justify-center mt-6">
                <img src="/placeholder.svg" alt="Đầu tư tại Đồng Nai" className="rounded-lg shadow-xl w-full max-w-md object-cover h-64 md:h-80" />
                <p className="sr-only">Hình ảnh gợi ý: Hình ảnh nhà máy, dây chuyền sản xuất. Nguồn: Bản quyền rõ ràng hoặc miễn phí</p>
              </div>
              <p className="text-center text-lg italic text-gray-600 dark:text-gray-400 mt-6">
                Thông tin chi tiết về các chính sách ưu đãi và cơ hội đầu tư sẽ được cập nhật thường xuyên trên cổng thông tin chính thức của tỉnh.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Liên hệ Section */}
        <section id="contact" className="mb-16 pt-8">
          <Card className="p-6 md:p-8 shadow-lg border-none bg-white dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-primary-foreground">Liên hệ và Hỗ trợ</CardTitle>
              <CardDescription className="text-lg md:text-xl text-muted-foreground">Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ quý khách.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-lg md:text-xl text-center mb-6 leading-relaxed">
                Để biết thêm thông tin chi tiết về du lịch, công nghiệp và cơ hội đầu tư tại Đồng Nai, vui lòng liên hệ với các cơ quan chức năng của tỉnh:
              </p>
              <div className="text-center space-y-3 text-lg md:text-xl">
                <p className="font-semibold text-secondary-foreground">Sở Văn hóa, Thể thao và Du lịch Đồng Nai</p>
                <p>Địa chỉ: Số 2, đường Nguyễn Văn Trị, Phường Thanh Bình, TP. Biên Hòa, Đồng Nai</p>
                <p>Điện thoại: (0251) 3822 300</p>
                <p>Email: svhttdl@dongnai.gov.vn</p>
                <p className="mt-6 font-semibold text-secondary-foreground">Trung tâm Xúc tiến Đầu tư, Thương mại và Du lịch Đồng Nai</p>
                <p>Địa chỉ: Số 15, đường Đồng Khởi, Phường Tam Hòa, TP. Biên Hòa, Đồng Nai</p>
                <p>Điện thoại: (0251) 3822 300</p>
                <p>Email: ipa@dongnai.gov.vn</p>
                <p className="mt-6 text-xl italic text-gray-600 dark:text-gray-400">
                  Chúng tôi luôn sẵn lòng hỗ trợ và cung cấp thông tin chi tiết nhất.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <MadeWithDyad />
    </div>
  );
};

export default Index;