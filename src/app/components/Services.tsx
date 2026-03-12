import { motion } from "motion/react";
import { Music, Radio, Clapperboard, GraduationCap, DollarSign } from "lucide-react";

interface Service {
  icon: typeof Music;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export function Services() {
  const services: Service[] = [
    {
      icon: Music,
      title: "Sáng tác nhạc theo yêu cầu",
      description:
        "Âm nhạc độc đáo được thiết kế riêng cho nhu cầu và cảm xúc đặc biệt của dự án bạn.",
      features: [
        "Giai điệu và chủ đề độc bản",
        "Bao gồm nhiều lần chỉnh sửa",
        "Toàn quyền sử dụng thương mại",
        "Cung cấp stems & masters",
      ],
      color: "purple",
    },
    {
      icon: Radio,
      title: "Sản xuất & Phối khí",
      description:
        "Dịch vụ sản xuất chuyên nghiệp biến ý tưởng âm nhạc của bạn thành hiện thực hoàn hảo và rõ ràng.",
      features: [
        "Sản xuất & mix hoàn chỉnh",
        "Phối khí & dàn dựng",
        "Điều phối nhạc công biểu diễn",
        "Mastering âm thanh",
      ],
      color: "blue",
    },
    {
      icon: Clapperboard,
      title: "Sáng tác nhạc phim & TV",
      description:
        "Nhạc phim điện ảnh nâng cao câu chuyện và tạo nên tác động cảm xúc lâu dài.",
      features: [
        "Sáng tác theo từng cảnh phim",
        "Thay thế nhạc tạm",
        "Bao gồm buổi spotting",
        "Giao hàng mọi định dạng",
      ],
      color: "purple",
    },
    {
      icon: GraduationCap,
      title: "Ký âm & Dạy hát mẫu theo yêu cầu",
      description:
        "Tạo bản ký âm và bản thu guide vocal giúp bạn hình dung và thể hiện bài hát chính xác.",
      features: [
        "Ký âm melody & hợp âm chuyên nghiệp",
        "Thu demo vocal theo yêu cầu",
        "Hướng dẫn phrasing & cảm xúc",
        "File guide để thu âm hoặc biểu diễn",
      ],
      color: "blue",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Dịch vụ
          </h2>
          <p className="text-gray-400 text-2xl max-w-2xl mx-auto leading-relaxed">
            Giải pháp âm nhạc toàn diện cho mọi dự án
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                    service.color === "purple"
                      ? "from-purple-600/30 to-purple-800/30"
                      : "from-blue-600/30 to-blue-800/30"
                  } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      service.color === "purple"
                        ? "text-purple-400"
                        : "text-blue-400"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                      <span className="text-song-desc leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-950/40 to-blue-950/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <DollarSign className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white leading-tight">Bảng giá</h3>
          </div>
          <p className="text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
            Mỗi dự án đều độc đáo theo một cách riêng, và giá cả phụ thuộc vào quy mô, thời lượng và 
            độ phức tạp của bài hát. Tôi nhận cung cấp các gói linh hoạt phù hợp với ngân sách và 
            nhu cầu của bạn.
          </p>
          <p className="text-purple-400 font-medium leading-relaxed">
            Liên hệ để nhận báo giá tùy chỉnh cho dự án của bạn
          </p>
        </motion.div>
      </div>
    </section>
  );
}