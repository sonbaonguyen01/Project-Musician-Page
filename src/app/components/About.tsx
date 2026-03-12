import { motion } from "motion/react";
import { Award, Headphones, Sparkles, Target } from "lucide-react";

export function About() {
  const stats = [
    { label: "Năm hoạt động nghệ thuật", value: "30+" },
    { label: "Dự án hoàn thành", value: "200+" },
    { label: "Khách hàng hài lòng", value: "200+" },
    { label: "Giải thưởng", value: "30+" },
  ];

  const specializations = [
    { icon: Headphones, label: "Nhạc đỏ", color: "purple" },
    { icon: Sparkles, label: "Nhạc trữ tình", color: "blue" },
    { icon: Target, label: "Nhạc thiếu nhi", color: "purple" },
    { icon: Award, label: "Nhạc quê hương", color: "blue" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-950"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Về nhạc sĩ
          </h2>
          <p className="text-gray-400 text-2xl max-w-2xl mx-auto leading-relaxed">
            Từ trải nghiệm chân thật đến giai điệu chạm trái tim
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.value}
              </div>
              <div className="text-md text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Câu chuyện của tôi
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Với hơn 30 năm hoạt động nghệ thuật và gắn bó cùng âm nhạc
                  truyền thống Việt Nam, tôi sáng tác những giai điệu mang đậm
                  linh hồn quê hương, từ nhạc đỏ, trữ tình đến những ca khúc
                  thiếu nhi. Mỗi tác phẩm đều được nuôi dưỡng từ trải nghiệm đời
                  sống chân thực kết hợp cùng tâm hồn đồng điệu của một người
                  say mê âm nhạc.
                </p>

                <p>
                  Tôi tin rằng âm nhạc không chỉ để nghe, mà còn để lưu giữ ký
                  ức, kể lại câu chuyện của mỗi người và lan tỏa những giá trị
                  văn hóa bền vững qua từng thế hệ.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Phương pháp sáng tạo
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Mỗi tác phẩm của tôi đều bắt đầu từ việc lắng nghe và thấu hiểu
                câu chuyện, cảm xúc cũng như tinh thần văn hóa mà bài hát hướng
                tới. Tôi tìm cảm hứng từ những trải nghiệm đời sống, ký ức quê
                hương và vẻ đẹp giản dị của con người Việt Nam, từ đó hình thành
                nên những giai điệu mang tính chân thực và giàu cảm xúc. Trong
                quá trình sáng tác, tôi kết hợp nền tảng âm nhạc truyền thống
                với góc nhìn sáng tạo hiện đại, chú trọng đến từng chi tiết để
                giữ trọn tinh thần dân tộc nhưng vẫn tạo được sự gần gũi với lớp
                người nghe trẻ hiện đại. Tôi tin rằng âm nhạc chỉ thực sự sống
                khi chạm đến trái tim con người — vì vậy mỗi giai điệu được tạo
                ra không chỉ để vang lên, mà còn để được cảm nhận và lưu giữ
                theo thời gian.
              </p>
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                Thể loại nhạc & Chuyên môn
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializations.map((spec, index) => {
                  const Icon = spec.icon;
                  return (
                    <motion.div
                      key={spec.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-black/40 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-colors group"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                          spec.color === "purple"
                            ? "from-purple-600/20 to-purple-800/20"
                            : "from-blue-600/20 to-blue-800/20"
                        } flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            spec.color === "purple"
                              ? "text-purple-400"
                              : "text-blue-400"
                          }`}
                        />
                      </div>
                      <span className="text-gray-300 text-md font-medium leading-relaxed">
                        {spec.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                Kinh nghiệm & Thành tích
              </h3>
              <ul className="space-y-3">
                {[
                  "Sáng tác được hơn 500 ca khúc các loại",
                  "Sáng tác sở trường nhạc đỏ, nhạc truyền thống cho các đơn vị quân đội và công an - hơn 100 ca khúc",
                  "Sáng tác hơn 100 ca khúc cho các trường học phổ thông, mầm non",
                  "Sáng tác hơn 200 ca khúc cho các địa phương trong cả nước",
                  "Sáng tác hơn 100 ca khúc về thiếu nhi",
                  "Đã có hơn 20 ca khúc được giới thiệu trên đài phát thanh, truyền hình trung ương và địa phương",
                  "Đã có 05 ca khúc đạt giải huy chương vàng, bạc trong liên hoan nghệ thuật quần chúng trong và ngoài quân đội",
                  "Đã có kinh nghiệm hơn 20 năm trong viết lời, bình, đọc lời bình cho các chương trình nghệ thuật",
                  "Đã đạt 04 huy chương vàng, bạc trong hội diễn nghệ thuật quần chúng toàn quân",
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
