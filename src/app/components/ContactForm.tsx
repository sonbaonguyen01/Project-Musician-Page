import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    genre: "",
    description: "",
    budget: "",
    deadline: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // 1. Hiển thị trạng thái thành công ngay lập tức để tạo cảm giác mượt mà (Optimistic UI)
  setSubmitted(true);

  // 2. Định nghĩa URL n8n
const N8N_WEBHOOK_URL = "https://14.225.209.204.sslip.io/webhook/52368cb5-bc0a-4dd8-affd-6f59ac6580e4";

  try {
    // Gửi dữ liệu đi trong "im lặng"
    fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch(err => console.log("Gửi ngầm thất bại nhưng vẫn bỏ qua:", err));
    
  } catch (error) {
    // Chỉ log ra console để debug, không báo lỗi cho người dùng
    console.error("Silent error:", error);
  }

  // 3. Reset toàn bộ form ngay lập tức
  setFormData({
    name: "",
    email: "",
    projectType: "",
    genre: "",
    description: "",
    budget: "",
    deadline: "",
  });

  // 4. Tắt thông báo thành công sau 5 giây
  setTimeout(() => {
    setSubmitted(false);
  }, 5000);
};

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-purple-950/40 to-blue-950/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
        </motion.div>
        <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
          Đã nhận yêu cầu!
        </h3>
        <p className="text-gray-300 text-lg mb-2 leading-relaxed">
          Cảm ơn bạn đã liên hệ {formData.name}!
        </p>
        <p className="text-gray-400 leading-relaxed">
          Tôi sẽ xem xét chi tiết dự án và phản hồi lại bạn trong vòng 24 giờ.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-purple-950/30 to-blue-950/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="">
          <label
            htmlFor="name"
            className="block text-xl font-medium text-gray-300 mb-2 leading-relaxed"
          >
            Tên của bạn *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="absolute-normal-div w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            placeholder="Nguyễn Văn A"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xl font-medium text-gray-300 mb-2 leading-relaxed"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="absolute-normal-div w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            placeholder="example@email.com"
          />
        </div>

        {/* Project Type */}
        <div className="absolute-normal-div">
          <label
            htmlFor="projectType"
            className="block text-xl font-medium text-gray-300 mb-2"
          >
            Loại dự án *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          >
            <option value="" className="bg-gray-900">
              Chọn loại dự án
            </option>
            <option value="film" className="bg-gray-900">
              Sáng tác nhạc theo yêu cầu
            </option>
            <option value="commercial" className="bg-gray-900">
              Sản xuất & Phối khí
            </option>
            <option value="podcast" className="bg-gray-900">
              Ký âm & Dạy hát mẫu theo yêu cầu
            </option>
            <option value="other" className="bg-gray-900">
              Khác
            </option>
          </select>
        </div>

        {/* Genre */}
        <div>
          <label
            htmlFor="genre"
            className="block text-xl font-medium text-gray-300 mb-2 leading-relaxed"
          >
            Thể loại nhạc mong muốn
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="absolute-normal-div w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            placeholder="Ví dụ: Nhạc phim & TV, nhạc đỏ,..."
          />
        </div>

        {/* Budget */}
        <div className="absolute-normal-div">
          <label
            htmlFor="budget"
            className="block text-xl font-medium text-gray-300 mb-2 leading-relaxed"
          >
            Ngân sách ước tính
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          >
            <option value="" className="bg-gray-900">
              Chọn mức ngân sách
            </option>
            <option value="under-1k" className="bg-gray-900">
              Dưới 5 triệu VNĐ
            </option>
            <option value="1k-3k" className="bg-gray-900">
              5 - 15 triệu VNĐ
            </option>
            <option value="3k-5k" className="bg-gray-900">
              15 - 25 triệu VNĐ
            </option>
            <option value="10k-plus" className="bg-gray-900">
              Trên 25 triệu VNĐ
            </option>
            <option value="flexible" className="bg-gray-900">
              Linh hoạt / Trao đổi
            </option>
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label
            htmlFor="deadline"
            className="block text-xl font-medium text-gray-300 mb-2"
          >
            Thời hạn dự án
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="absolute-normal-div w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <label
          htmlFor="description"
          className="block text-xl font-medium text-gray-300 mb-2 leading-relaxed"
        >
          Mô tả dự án *
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={6}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black/40 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
          placeholder="Hãy cho tôi biết về dự án của bạn. Giá trị cốt lõi của bài hát là gì? Âm nhạc của bài hát cần gợi lên cảm xúc nào? Có tham khảo hoặc yêu cầu cụ thể nào không?"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-6 w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow leading-tight"
      >
        <Send className="w-5 h-5" />
        Gửi yêu cầu dự án
      </motion.button>
    </form>
  );
}