import * as stylex from "@stylexjs/stylex";

interface InfoFormProps {
  title: string;
  children?: any;
}

const InfoForm = ({ title, children }: InfoFormProps) => {
  return (
    <div {...stylex.props(infoStyles.layout)}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
};

export default InfoForm;

export const infoStyles = stylex.create({
  layout: {
    padding: "25px 0",
    borderBottom: "1px solid blue",
  },

  snsConnect: {
    display: "flex",
    gap: "10px",
  },

  activityLog: {
    display: "flex",
    gap: "50px",
    justifyContent: "center",
  },
  activityLogLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
