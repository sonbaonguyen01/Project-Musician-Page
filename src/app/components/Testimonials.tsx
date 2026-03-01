import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      role: "Đạo diễn phim",
      company: "Indie Films Co.",
      content:
        "Bản nhạc của Alex đã nâng tầm bộ phim của chúng tôi lên một tầm cao mới. Chiều sâu cảm xúc và sự chú ý đến từng chi tiết trong mỗi đoạn nhạc thật đáng kinh ngạc. Anh ấy thực sự hiểu tầm nhìn của chúng tôi và biến nó thành hiện thực qua âm nhạc.",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "Giám đốc game",
      company: "Pixel Studios",
      content:
        "Làm việc với Alex thực sự là một niềm vui. Anh ấy mang đến nhạc nền thích ứng hoàn hảo ghi lại bầu không khí của game chúng tôi. Chuyên nghiệp, phản hồi nhanh và tài năng đáng kinh ngạc.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Giám đốc sáng tạo",
      company: "Brand Essence Agency",
      content:
        "Chúng tôi cần âm nhạc nổi bật trong thị trường đông đúc. Alex đã tạo ra thứ gì đó độc đáo và đáng nhớ hoàn toàn phù hợp với thương hiệu của chúng tôi. Khách hàng vô cùng hài lòng!",
      rating: 5,
    },
    {
      name: "James Patterson",
      role: "Nhà sản xuất",
      company: "Sunset Productions",
      content:
        "Alex là một chuyên gia thực thụ. Giao hàng nhanh, giao tiếp xuất sắc, và quan trọng nhất là âm nhạc tuyệt vời. Chúng tôi đã làm việc cùng nhau trong nhiều dự án và sẽ tiếp tục hợp tác.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "Host Podcast",
      company: "Stories Untold",
      content:
        "Nhạc intro và outro mà Alex tạo cho podcast của chúng tôi thật hoàn hảo. Nó tạo nên không khí tuyệt vời và đã trở thành phần đặc trưng của chương trình. Rất đề xuất!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Quản lý Marketing",
      company: "TechNova",
      content:
        "Alex đã mang đến một bản nhạc hiện đại, đầy năng lượng hoàn hảo ghi lại tinh thần đổi mới của thương hiệu chúng tôi. Âm nhạc là trung tâm của thành công chiến dịch.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="">
      
    </section>
  );
}