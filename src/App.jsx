import { Provider } from "react-redux";
import { store } from "./store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages";

import ScrollTopBehaviour from "./components/common/ScrollTopBehaviour";
import ListingGridPage1 from "./pages/listings/listing-grid-v1";
import ListingExchange from "./pages/listings/listing-exchange";

import CreateListingPage from "./pages/admin/create-listing";
import MyDashboardPage from "./pages/admin/my-dashboard";
import MyFavouritePage from "./pages/admin/my-favourites";
import MyMessagePage from "./pages/admin/my-message";
import MyPackagepage from "./pages/admin/my-package";
import MyPropertiesPage from "./pages/admin/my-properties";
import MyReviewPage from "./pages/admin/my-review";
import MySavedSearchPage from "./pages/admin/my-saved-search";
import Blog1Page from "./pages/blogs/blog-list-1";
import Blog2Page from "./pages/blogs/blog-list-2";
import Blog3Page from "./pages/blogs/blog-list-3";
import NotFoundPage from "./pages/not-found";
import AboutUsPage from "./pages/others/about-us";
import ComparePage from "./pages/others/compare";
import ContactPage from "./pages/others/contact";
import FaqPage from "./pages/others/faq";
import PageGallery from "./pages/others/gallery";
import LoginPage from "./pages/others/login";
import MembershipPage from "./pages/others/membership";
import RegisterPage from "./pages/others/register";
import ServicePage from "./pages/others/service";
import TermsPage from "./pages/others/terms";
import AgencyV1Page from "./pages/agency/agency-v1";
import AgencyV2Page from "./pages/agency/agency-v2";
import AgencyDetailsDynamic from "./pages/agency/agency-details";
import AgentV1Page from "./pages/agent/agent-v1";
import Agentv2Page from "./pages/agent/agent-v2";
import AgentDetailsDynamic from "./pages/agent/agent-details";
import BlogDetails from "./pages/blogs/blog-details";
import ListingDynamicDetailsV1 from "./pages/listing-details/listing-details-v1";
import ListingDynamicDetailsV2 from "./pages/listing-details/listing-details-v2";
import ListingDetailsPage3 from "./pages/listing-details/listing-details-v3";
import ListingDetailsPage4 from "./pages/listing-details/listing-details-v4";
// import ListingPage1 from "./pages/listings/listing-list-v1";

if (typeof window !== "undefined") {
  import("bootstrap");
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />

              <Route path="listing-grid-v1" element={<ListingGridPage1 />} />
              <Route path="listing-exchange" element={<ListingExchange />} />

              <Route
                path="listing-details-v1/:id"
                element={<ListingDynamicDetailsV1 />}
              />
              <Route
                path="listing-details-v2/:id"
                element={<ListingDynamicDetailsV2 />}
              />
              <Route
                path="listing-details-v3"
                element={<ListingDetailsPage3 />}
              />
              <Route
                path="listing-details-v4"
                element={<ListingDetailsPage4 />}
              />

              <Route path="create-listing" element={<CreateListingPage />} />
              <Route path="my-dashboard" element={<MyDashboardPage />} />
              <Route path="my-favourites" element={<MyFavouritePage />} />
              <Route path="my-message" element={<MyMessagePage />} />
              <Route path="my-package" element={<MyPackagepage />} />
              <Route path="my-profile" element={<MyPropertiesPage />} />
              <Route path="my-properties" element={<MyPropertiesPage />} />
              <Route path="my-review" element={<MyReviewPage />} />
              <Route path="my-saved-search" element={<MySavedSearchPage />} />

              <Route path="blog-list-1" element={<Blog1Page />} />
              <Route path="blog-list-2" element={<Blog2Page />} />
              <Route path="blog-list-3" element={<Blog3Page />} />
              <Route path="blog-details/:id" element={<BlogDetails />} />

              <Route path="404" element={<NotFoundPage />} />
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="compare" element={<ComparePage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="gallery" element={<PageGallery />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="membership" element={<MembershipPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="service" element={<ServicePage />} />
              <Route path="terms" element={<TermsPage />} />

              <Route path="agency-v1" element={<AgencyV1Page />} />
              <Route path="agency-v2" element={<AgencyV2Page />} />
              <Route
                path="agency-details/:id"
                element={<AgencyDetailsDynamic />}
              />

              <Route path="agent-v1" element={<AgentV1Page />} />
              <Route path="agent-v2" element={<Agentv2Page />} />
              <Route
                path="agent-details/:id"
                element={<AgentDetailsDynamic />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Provider>

        <ScrollToTop />
        <ScrollTopBehaviour />
      </BrowserRouter>
    </>
  );
}

export default App;
