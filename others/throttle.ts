function throttle<F extends (...args: any[]) => any>(
  func: F,
  limit: number
): (...args: Parameters<F>) => void {
  let inThrottle: boolean = false;

  return (...args: Parameters<F>): void => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// // Пример использования в компоненте
// const ThrottleExample: React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>("");
//   const [throttledValue, setThrottledValue] = useState<string>("");

//   // Создаем throttled функцию
//   const throttledSetThrottledValue = throttle((value: string) => {
//     setThrottledValue(value);
//   }, 1000); // Ограничение: 1 вызов в секунду

//   // Обрабатываем изменение input
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setInputValue(value);
//     throttledSetThrottledValue(value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//       />
//       <p>Input Value: {inputValue}</p>
//       <p>Throttled Value: {throttledValue}</p>
//     </div>
//   );
// };

// export default ThrottleExample;
