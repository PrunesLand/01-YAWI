import React from "react";
import Navigation from "../Home/Navigation/Navigation";
import { ThirdWrapper } from "../ThirdPage/ThirdStyle";

const Fourth = () => {
	return (
		<ThirdWrapper>
			<h1>Fourth</h1>
			<p>Tough Love</p>
			<p>
				Growing up in an asian family, the phrase 'toughen up' is oftenly used
				as a method of coping . It means to accept the trobles of life. [ABC]
			</p>
			<p>
				It has long been seen that asian parents treat their child the harshest.
				As making a small mistake resulted in consequences or dishonor. While
				the consequences are at times cruel and traumatizing we've often ignored
				the intention of this act.
			</p>
			<p>
				It is not under the name of a good intention but to preserve and respect
				traditions and those that have practiced before.{" "}
			</p>
			<p>
				This moral practice has been passed down for generations and
				disobedience is seen as breaking tradition which can also indicate
				disloyalty to the family.
			</p>
			<p>
				There are those that have it rough and some who have it worse. But that
				doesn't make your pain far lesser!
			</p>
			<p>
				Eveyone experiences hardships in their lives no matter whho it is.
				Everyone fights their own batttles that we can't see. That includes
				those that struggle the most.
			</p>
			<Navigation pageNext='/5' pagePrev='/3' />
		</ThirdWrapper>
	);
};

export default Fourth;
