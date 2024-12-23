import { Webinar } from '@/database';
import {
  AddWebinarRequestPayloadProps,
  WebinarEnrolledUsersProps,
} from '@/interfaces';

// Add A Webinar
const addAWebinarToDB = async (
  webinarPayload: AddWebinarRequestPayloadProps
) => {
  try {
    const newWebinar = new Webinar(webinarPayload);
    const savedWebinar = await newWebinar.save();

    return { data: savedWebinar, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const getAllWebinarsFromDB = async () => {
  try {
    const webinars = await Webinar.find();
    return { data: webinars, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const updateEnrolledUsersInWebinarDB = async (
  slug: string,
  users: WebinarEnrolledUsersProps[]
) => {
  try {
    const updatedWebinar = await Webinar.findOneAndUpdate(
      { slug },
      { $push: { enrolledUsersList: { $each: users } } },
      { new: true }
    );

    if (!updatedWebinar) {
      return { data: null, error: 'Webinar not found' };
    }

    return { data: updatedWebinar, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const checkUserRegistrationInWebinarDB = async (
  slug: string,
  email: string
) => {
  try {
    const webinar = await Webinar.findOne({ slug });

    if (!webinar) {
      return { data: false, error: 'Webinar not found' };
    }

    const isRegistered = webinar.enrolledUsersList.some(
      (user: { email: string }) => user.email === email
    );

    return { data: isRegistered, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const getWebinarDetailsFromDB = async (slug: string) => {
  try {
    const webinarDetails = await Webinar.findOne({ slug }).select(
      '-enrolledUsersList'
    );

    if (!webinarDetails) {
      return {
        data: null,
        error: 'Webinar not found',
      };
    }

    return {
      data: webinarDetails,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: 'Failed to fetch webinar details from the database',
    };
  }
};

const getWebinarBySlugFromDB = async (slug: string) => {
  try {
    const webinar = await Webinar.findOne({ slug });
    if (!webinar) {
      return { data: null, error: 'Webinar not found' };
    }

    return { data: webinar, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const deleteAWebinarFromDB = async (slug: string) => {
  try {
    const webinar = await Webinar.findOne({}).where('slug').equals(slug);
    if (!webinar) {
      return { data: null, error: 'Webinar not found' };
    }

    await webinar.deleteOne();

    return { error: null };
  } catch (error) {
    return { error };
  }
};

export {
  getAllWebinarsFromDB,
  updateEnrolledUsersInWebinarDB,
  checkUserRegistrationInWebinarDB,
  getWebinarDetailsFromDB,
  getWebinarBySlugFromDB,
  addAWebinarToDB,
  deleteAWebinarFromDB,
};
