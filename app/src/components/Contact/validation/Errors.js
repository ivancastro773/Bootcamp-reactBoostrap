export default function errorHandle(errors) {
  return {
    name() {
      return errors.name && <div className="required-validation">{errors.name}</div>;
    },
    email() {
      return errors.email && <div className="required-validation">{errors.email}</div>;
    },

    phone() {
      return errors.phone && <div className="required-validation">{errors.phone}</div>;
    },
    message() {
      return errors.message && <div className="required-validation">{errors.message}</div>;
    },
  };
}
