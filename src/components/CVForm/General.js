import Input from '../UI/Input';
import TextArea from '../UI/TextArea';
import classes from './General.module.css';

export default function GeneralInfo(props) {
  return (
    <div className={classes['general-info']}>
      <h3>Personal Information</h3>
      <form>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.generalInfo.firstName}
          onChange={props.handleChange}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={props.generalInfo.lastName}
          onChange={props.handleChange}
        />
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={props.generalInfo.title}
          onChange={props.handleChange}
        />
        <Input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          value={props.generalInfo.phoneNumber}
          onChange={props.handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={props.generalInfo.email}
          onChange={props.handleChange}
        />
        <Input
          type="text"
          name="address"
          placeholder="Address"
          value={props.generalInfo.address}
          onChange={props.handleChange}
        />
        <Input
          type="text"
          name="linkedIn"
          placeholder="LinkedIn"
          value={props.generalInfo.linkedIn}
          onChange={props.handleChange}
        />
        <Input
          type="text"
          name="facebook"
          placeholder="Facebook"
          value={props.generalInfo.facebook}
          onChange={props.handleChange}
        />
        <TextArea
          name="description"
          placeholder="Description"
          value={props.generalInfo.description}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}
