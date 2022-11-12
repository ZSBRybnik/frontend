use neon::prelude::*;
use uint::construct_uint;
construct_uint! {
    struct U1024(16);
}

#[neon::main]
fn main(mut context: ModuleContext) -> NeonResult<()> {
    let _guard = sentry::init(("https://459a9c7f853d4f3092363dccb028055b@o4504091405910016.ingest.sentry.io/4504091410563076", sentry::ClientOptions {
        release: sentry::release_name!(),
        ..Default::default()
    }));
    let max_unsigned_integer_128_as_string: Handle<JsString> =
        context.string(std::u128::MAX.to_string()).clone();
    let max_unsigned_integer_1024_as_string = context
        .string(
            U1024 {
                0: [
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                    std::u64::MAX,
                ],
            }
            .to_string(),
        )
        .clone();
    context.export_value("maxUnsignedInteger128", max_unsigned_integer_128_as_string)?;
    context.export_value(
        "maxUnsignedInteger1024",
        max_unsigned_integer_1024_as_string,
    )?;

    Ok(())
}
