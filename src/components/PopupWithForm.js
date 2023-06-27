export function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonText,
}) {
  return (
    <section className={`popup popup_type_${name} ${isOpen && `popup_opened`}`}>
      <div className="popup__container">
        <p className="popup__title">{title}</p>
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        ></button>
        <form
          className={`popup__form popup__form_type_${name}`}
          name="popup-form"
          noValidate
        >
          {children}
          <button className="popup__submit-btn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
