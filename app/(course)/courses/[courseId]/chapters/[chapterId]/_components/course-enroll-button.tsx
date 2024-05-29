"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  console.log(courseId)
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = axios.post(`/api/courses/${courseId}/checkout`);
      
      window.location.assign((await response).data.url);
    } catch (error: any) {
      toast.error("Something went wrong", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={onClick} disabled={isLoading} className='w-full md:w-auto'>
      Enroll For {formatPrice(price)}
    </Button>
  );
};
