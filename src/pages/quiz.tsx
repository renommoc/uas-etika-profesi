import {
  ArrowCounterClockwiseIcon,
  ArrowRightIcon,
  CertificateIcon,
  CheckCircleIcon,
  LightbulbIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { quizData } from "@/constants/quiz";
import { cn } from "@/lib/utils";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuizData = quizData[currentQuestion];
  const isLastQuestion = currentQuestion + 1 === quizData.length;
  const scorePercentage = Math.round((score / quizData.length) * 100);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || isAnswered) return;

    if (selectedAnswer === currentQuizData.answerIndex) {
      setScore((prev) => prev + 1);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);

    if (!isLastQuestion) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getOptionStyle = (index: number) => {
    const isSelected = selectedAnswer === index;
    const isCorrectAnswer = index === currentQuizData.answerIndex;

    if (isSelected && !isAnswered) {
      return "border-primary bg-primary/10 text-foreground font-medium";
    }

    if (isAnswered) {
      if (isCorrectAnswer) {
        return "border-emerald-500/40 bg-emerald-500/10 text-emerald-500 font-medium";
      }
      if (isSelected && !isCorrectAnswer) {
        return "border-destructive/40 bg-destructive/10 text-destructive";
      }
      return "border-foreground/5 bg-foreground/5 opacity-50";
    }

    return "border-foreground/10 bg-foreground/5 hover:bg-foreground/10";
  };

  if (quizComplete) {
    return (
      <div className="mx-auto grid min-h-svh max-w-[90%] place-items-center sm:min-h-screen">
        <section className="flex w-full max-w-3xl flex-col items-center gap-6 rounded-lg border border-foreground/10 bg-foreground/10 p-6 text-center shadow-xl backdrop-blur-sm md:p-10">
          <div className="flex size-14 items-center justify-center rounded-full border border-foreground/5 bg-foreground/5 text-foreground">
            <CertificateIcon size={32} />
          </div>

          <div className="space-y-2">
            <h2 className="font-bold text-2xl text-foreground tracking-tight">Quiz Selesai!</h2>
            <p className="max-w-md text-foreground/70 text-sm">
              Terima kasih telah berpartisipasi.
            </p>
          </div>

          <div className="my-2 w-full max-w-xs space-y-4 rounded-2xl border border-foreground/5 bg-foreground/5 p-4">
            <div className="font-semibold text-foreground/70 text-xs uppercase tracking-wider">
              Skor
            </div>
            <div className="font-bold font-mono text-5xl text-foreground tracking-tighter">
              {scorePercentage}
            </div>
            <div className="mt-2 text-foreground/70 text-xs">
              Menjawab benar <span className="font-medium text-foreground">{score}</span> dari{" "}
              <span className="font-medium text-foreground">{quizData.length}</span> soal
            </div>
          </div>

          <p className="max-w-sm text-foreground/70 text-xs italic leading-relaxed">
            {score === quizData.length ? '"Biasa aja"' : '"Kurang belajar ngab"'}
          </p>

          <Separator className="bg-foreground/10" />

          <button
            type="button"
            onClick={handleResetQuiz}
            className={cn(
              "flex items-center gap-2 rounded-md bg-foreground px-4 py-2",
              "font-medium text-background text-sm transition hover:opacity-90",
            )}
          >
            <ArrowCounterClockwiseIcon size={16} />
            Ulangi
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[90%] pt-28 pb-10">
      <div className="mb-10 flex flex-col items-center space-y-4 text-pretty text-center">
        <h1 className="font-bold text-3xl text-foreground tracking-tight md:text-4xl lg:text-5xl">
          Evaluasi Pemahaman Pemikiran & Etika IT
        </h1>
        <p className="text-pretty text-foreground/70 text-sm lg:text-base">
          Uji pemahaman mengenai penerapan kode etik, regulasi hukum siber, dan tanggung jawab moral
          sebagai praktisi IT profesional.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <section className="flex flex-col gap-5 rounded-lg border border-foreground/10 bg-foreground/10 p-5 shadow-sm backdrop-blur-sm md:p-7">
          <div className="flex items-center justify-between">
            <Badge className="border-foreground/20 bg-foreground/10 text-foreground hover:bg-foreground/20">
              Pertanyaan {currentQuestion + 1} dari {quizData.length}
            </Badge>
            <span className="font-mono text-foreground/50 text-xs">
              Skor Saat Ini: {scorePercentage}%
            </span>
          </div>

          <h2 className="font-semibold text-base text-foreground leading-relaxed md:text-lg">
            {currentQuizData.question}
          </h2>

          <Separator className="bg-foreground/10" />

          <div className="flex flex-col gap-3">
            {currentQuizData.options.map((option, index) => (
              <button
                type="button"
                key={option.slice(0, 4)}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-4 text-left text-sm leading-relaxed transition",
                  getOptionStyle(index),
                )}
              >
                <span className="mt-0.5 shrink-0 font-bold font-mono text-foreground/40 text-xs">
                  {String.fromCharCode(65 + index)}.
                </span>
                <span className="flex-1 text-foreground/90">{option}</span>

                {isAnswered && index === currentQuizData.answerIndex && (
                  <CheckCircleIcon size={18} className="mt-0.5 shrink-0 text-emerald-500" />
                )}
                {isAnswered &&
                  selectedAnswer === index &&
                  index !== currentQuizData.answerIndex && (
                    <XCircleIcon size={18} className="mt-0.5 shrink-0 text-destructive" />
                  )}
              </button>
            ))}
          </div>

          {isAnswered && (
            <div className="mt-2 space-y-2 rounded-xl border border-foreground/5 bg-foreground/5 p-4">
              <p className="flex items-center gap-1.5 font-bold text-[0.625rem] text-foreground/80 uppercase tracking-wide">
                <LightbulbIcon size={14} /> Penjelasan
              </p>
              <p className="text-justify text-foreground/70 text-xs leading-relaxed">
                {currentQuizData.explanation}
              </p>
            </div>
          )}

          <div className="mt-4 flex justify-end">
            {!isAnswered ? (
              <button
                type="button"
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className={cn(
                  "rounded-xl bg-foreground px-5 py-2.5 font-medium text-background text-sm",
                  "transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30",
                )}
              >
                Kunci Jawaban
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextQuestion}
                className={cn(
                  "flex items-center gap-2 rounded-xl border border-foreground/5",
                  "bg-foreground/5 px-5 py-2.5 font-medium text-foreground text-sm",
                  "transition hover:bg-foreground/10",
                )}
              >
                {isLastQuestion ? "Lihat Hasil Akhir" : "Pertanyaan Selanjutnya"}
                <ArrowRightIcon size={16} />
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
