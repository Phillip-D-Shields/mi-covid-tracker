import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button"

export default function MainLink(props) {
  return (
    <Link href={props.href} style={{marginRight: 8}} target="_blank" rel="noopener noreferrer">
      <Button variant="contained" color={props.btnColor} endIcon={props.endIcon}>
        {props.btnText}
      </Button>

    </Link>
  );
}
