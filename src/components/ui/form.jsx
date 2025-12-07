import Button from "./button.jsx";
export default function Form() {
  const labelClasses = "text-sm font-medium text-gray-700 dark:text-gray-300";
  const inputClasses =
    "w-full px-4 py-3 mt-2 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors duration-100";
  const textareaClasses =
    "flex mt-2 text-base ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transtion-colors duration-100 resize-none";
  const buttonClasses =
    "hover-scale w-full rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition-all duration-100 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-slate-900";
  const formInfo = [
    {
      label: "Full Name",
      type: "text",
      name: "name",
      placeholder: "Your Full Name",
      required: true,
    },
    {
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Your Email Address",
      required: true,
    },
    {
      label: "Subject",
      type: "text",
      name: "subject",
      placeholder: "Subject",
      required: true,
    },
    {
      label: "Message",
      type: "textarea",
      name: "message",
      placeholder: "Tell me about your project...",
      required: true,
    },
  ];
  return (
    <form action="https://formspree.io/f/mzbwkbey" method="post" id="form">
      {formInfo.map((field, index) => (
        <div
          key={index}
          className={
            index !== formInfo.length - 1 ? "mb-4 space-y-2" : "mb-6 space-y-2"
          }
        >
          <label htmlFor={field.name} className={labelClasses}>
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className={
              field.type === "textarea" ? textareaClasses : inputClasses
            }
            autoComplete="off"
            {...(field.type === "textarea" ? { rows: 6 } : {})}
          />
        </div>
      ))}
      <Button content="Send Message" className={buttonClasses} />
    </form>
  );
}
